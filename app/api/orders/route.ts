import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

// Функция для записи заказа в Google Sheets
async function addOrderToSheets(orderData: any) {
  try {
    // Инициализация Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!spreadsheetId) {
      throw new Error('GOOGLE_SHEET_ID не настроен');
    }

    // Подготовка данных для записи
    const timestamp = new Date().toLocaleString('ru-RU');
    const orderItems = orderData.items.map((item: any) => 
      `${item.title} (${item.quantity} шт.) - ${item.price}₽`
    ).join('; ');

    const values = [
      [
        timestamp,
        orderData.customerName,
        orderData.phone,
        orderData.email,
        orderData.address,
        orderItems,
        orderData.totalAmount,
        orderData.status || 'Новый'
      ]
    ];

    // Сначала проверим существование листа и создадим заголовки если нужно
    try {
      // Пробуем записать в первый лист (обычно Sheet1)
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: 'A:H',
        valueInputOption: 'RAW',
        requestBody: {
          values,
        },
      });
    } catch (error: unknown) {
      // Если не получилось, пробуем создать заголовки и записать данные
      console.log('Попытка создать заголовки и записать данные...');
      
      // Сначала добавим заголовки
      const headers = [
        ['Время заказа', 'Имя клиента', 'Телефон', 'Email', 'Адрес', 'Товары', 'Сумма', 'Статус']
      ];
      
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: 'A1:H1',
        valueInputOption: 'RAW',
        requestBody: {
          values: headers,
        },
      });
      
      // Теперь добавим данные
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: 'A:H',
        valueInputOption: 'RAW',
        requestBody: {
          values,
        },
      });
    }

    return { success: true };
  } catch (error: unknown) {
    console.error('Ошибка при записи в Google Sheets:', error);
    const message = error instanceof Error ? error.message : String(error);
    return { success: false, error: message };
  }
}

export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json();
    console.log('Получен заказ:', orderData);

    // Валидация данных
    if (!orderData.customerName || !orderData.phone || !orderData.items?.length) {
      console.log('Ошибка валидации: недостаточно данных');
      return NextResponse.json(
        { error: 'Недостаточно данных для заказа' },
        { status: 400 }
      );
    }

    // Проверяем переменные окружения
    console.log('GOOGLE_SERVICE_ACCOUNT_EMAIL:', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ? 'настроен' : 'НЕ НАСТРОЕН');
    console.log('GOOGLE_SHEET_ID:', process.env.GOOGLE_SHEET_ID ? 'настроен' : 'НЕ НАСТРОЕН');
    console.log('GOOGLE_PRIVATE_KEY:', process.env.GOOGLE_PRIVATE_KEY ? 'настроен' : 'НЕ НАСТРОЕН');

    // Добавление заказа в Google Sheets
    const result = await addOrderToSheets(orderData);

    if (result.success) {
      console.log('Заказ успешно сохранен в Google Sheets');
      return NextResponse.json({ 
        success: true, 
        message: 'Заказ успешно создан' 
      });
    } else {
      console.error('Ошибка при сохранении в Google Sheets:', result.error);
      return NextResponse.json(
        { error: 'Ошибка при создании заказа', details: result.error },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    console.error('Ошибка API заказов:', error);
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера', details: message },
      { status: 500 }
    );
  }
}
