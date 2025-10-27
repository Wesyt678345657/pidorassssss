# 📊 Настройка Google Sheets для заказов

Пошаговая инструкция по подключению автоматического сохранения заказов в Google Sheets.

## 🚀 Шаг 1: Создание Google Cloud проекта

1. **Откройте [Google Cloud Console](https://console.cloud.google.com/)**
2. **Создайте новый проект:**
   - Нажмите на выпадающий список проектов (вверху слева)
   - Нажмите "New Project"
   - Введите название: `Фермерский Маркет`
   - Нажмите "Create"

3. **Включите Google Sheets API:**
   - В меню слева выберите "APIs & Services" → "Library"
   - В поиске введите "Google Sheets API"
   - Нажмите на результат и нажмите "Enable"

## 🔑 Шаг 2: Создание Service Account

1. **Перейдите в Credentials:**
   - В меню слева: "APIs & Services" → "Credentials"

2. **Создайте Service Account:**
   - Нажмите "Create Credentials" → "Service Account"
   - Заполните:
     - **Service account name:** `fermer-orders-service`
     - **Service account ID:** `fermer-orders-service` (заполнится автоматически)
     - **Description:** `Service account for order management`
   - Нажмите "Create and Continue"
   - Пропустите роли (нажмите "Continue")
   - Нажмите "Done"

## 🔐 Шаг 3: Создание ключа доступа

1. **Найдите созданный Service Account:**
   - В списке Service Accounts найдите `fermer-orders-service@ваш-проект.iam.gserviceaccount.com`
   - Нажмите на email аккаунта

2. **Создайте ключ:**
   - Перейдите на вкладку "Keys"
   - Нажмите "Add Key" → "Create new key"
   - Выберите "JSON" и нажмите "Create"
   - **Скачайте файл** - он понадобится в следующем шаге

## 📄 Шаг 3.1: Работа с JSON файлом

**JSON файл выглядит примерно так:**
```json
{
  "type": "service_account",
  "project_id": "ваш-проект-123456",
  "private_key_id": "abc123...",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n",
  "client_email": "fermer-orders-service@ваш-проект-123456.iam.gserviceaccount.com",
  "client_id": "123456789...",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/fermer-orders-service%40ваш-проект-123456.iam.gserviceaccount.com"
}
```

**Что нам нужно из этого файла:**

1. **`client_email`** - это email Service Account
   - Пример: `fermer-orders-service@ваш-проект-123456.iam.gserviceaccount.com`
   - Скопируйте это значение для `GOOGLE_SERVICE_ACCOUNT_EMAIL`

2. **`private_key`** - это приватный ключ
   - Начинается с `-----BEGIN PRIVATE KEY-----`
   - Заканчивается на `-----END PRIVATE KEY-----\n`
   - **Важно:** В JSON файле переносы строк показаны как `\n`
   - Скопируйте ВСЁ значение включая кавычки

**Пример правильного копирования:**
```json
"private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
```

**Сохраните JSON файл в безопасном месте** - он содержит важные данные для доступа к Google API!

## 📋 Шаг 4: Создание Google Sheets таблицы

1. **Создайте новую таблицу:**
   - Откройте [Google Sheets](https://sheets.google.com/)
   - Нажмите "Blank" для создания новой таблицы
   - Назовите таблицу: "Заказы фермерского маркета"

2. **Настройте заголовки:**
   - В первой строке (A1:H1) введите:
   ```
   A1: Время заказа
   B1: Имя клиента  
   C1: Телефон
   D1: Email
   D1: Адрес
   F1: Товары
   G1: Сумма
   H1: Статус
   ```

3. **Скопируйте ID таблицы:**
   - Из URL таблицы скопируйте ID (между `/d/` и `/edit`)
   - Пример: `https://docs.google.com/spreadsheets/d/1ABC123.../edit`
   - ID: `1ABC123...`

## 🔗 Шаг 5: Предоставление доступа

1. **Откройте настройки доступа:**
   - В Google Sheets нажмите "Share" (кнопка в правом верхнем углу)

2. **Добавьте Service Account:**
   - В поле "Add people and groups" вставьте email из JSON файла
   - Email выглядит как: `fermer-orders-service@ваш-проект.iam.gserviceaccount.com`
   - Выберите роль "Editor"
   - Нажмите "Send"

## ⚙️ Шаг 6: Настройка переменных окружения

1. **Создайте файл `.env.local` в корне проекта** (рядом с `package.json`)

2. **Откройте скачанный JSON файл** и скопируйте данные

3. **Заполните `.env.local` по образцу:**

```env
# Google Sheets API настройки
GOOGLE_SERVICE_ACCOUNT_EMAIL=fermer-orders-service@ваш-проект-123456.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=1ABC123DEF456GHI789JKL
```

**Пошаговое заполнение:**

**A) `GOOGLE_SERVICE_ACCOUNT_EMAIL`:**
- Скопируйте значение `client_email` из JSON файла
- Пример: `fermer-orders-service@ваш-проект-123456.iam.gserviceaccount.com`

**B) `GOOGLE_PRIVATE_KEY`:**
- Скопируйте ВСЁ значение `private_key` из JSON файла
- **Включая кавычки!**
- Пример: `"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"`

**C) `GOOGLE_SHEET_ID`:**
- Скопируйте ID таблицы из URL Google Sheets
- Это длинная строка между `/d/` и `/edit`
- Пример: `1ABC123DEF456GHI789JKL`

**⚠️ Важные моменты:**
- Не удаляйте кавычки вокруг `GOOGLE_PRIVATE_KEY`
- Не изменяйте `\n` в приватном ключе - это переносы строк
- Убедитесь, что в файле `.env.local` нет лишних пробелов
- Файл должен быть в кодировке UTF-8

## 🚀 Шаг 7: Запуск приложения

1. **Перезапустите сервер разработки:**
```bash
npm run dev
```

2. **Проверьте работу:**
   - Откройте http://localhost:3000
   - Добавьте товары в корзину
   - Перейдите в корзину и оформите заказ
   - Проверьте Google Sheets - должен появиться новый заказ!

## ✅ Проверка работы

После настройки каждый заказ будет автоматически сохраняться в Google Sheets со следующими данными:
- **Время заказа** - когда был создан заказ
- **Имя клиента** - имя покупателя
- **Телефон** - контактный телефон
- **Email** - email покупателя (если указан)
- **Адрес** - адрес доставки
- **Товары** - список товаров с количеством и ценой
- **Сумма** - общая сумма заказа
- **Статус** - "Новый" (по умолчанию)

## 🆘 Решение проблем

**Ошибка "GOOGLE_SHEET_ID не настроен":**
- Проверьте, что файл `.env.local` создан в корне проекта
- Убедитесь, что переменная `GOOGLE_SHEET_ID` заполнена

**Ошибка "Permission denied":**
- Проверьте, что Service Account добавлен в Google Sheets с правами Editor
- Убедитесь, что email Service Account скопирован правильно

**Ошибка "Invalid credentials":**
- Проверьте, что `GOOGLE_PRIVATE_KEY` скопирован полностью из JSON файла
- Убедитесь, что переносы строк заменены на `\n`

## ❌ Частые ошибки с JSON файлом

**1. Неправильное копирование private_key:**
```env
# ❌ НЕПРАВИЛЬНО - без кавычек
GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n

# ✅ ПРАВИЛЬНО - с кавычками
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
```

**2. Изменение \n на реальные переносы строк:**
```env
# ❌ НЕПРАВИЛЬНО - реальные переносы строк
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...
-----END PRIVATE KEY-----"

# ✅ ПРАВИЛЬНО - \n символы
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
```

**3. Неполное копирование ключа:**
```env
# ❌ НЕПРАВИЛЬНО - неполный ключ
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC..."

# ✅ ПРАВИЛЬНО - полный ключ с окончанием
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
```

**4. Пробелы в начале/конце значений:**
```env
# ❌ НЕПРАВИЛЬНО - с пробелами
GOOGLE_SERVICE_ACCOUNT_EMAIL= fermer-orders-service@ваш-проект.iam.gserviceaccount.com 
GOOGLE_SHEET_ID= 1ABC123DEF456GHI789JKL 

# ✅ ПРАВИЛЬНО - без пробелов
GOOGLE_SERVICE_ACCOUNT_EMAIL=fermer-orders-service@ваш-проект.iam.gserviceaccount.com
GOOGLE_SHEET_ID=1ABC123DEF456GHI789JKL
```

## 📞 Поддержка

Если возникли проблемы, свяжитесь с нами:
- **Телефон:** +7 (908) 583-23-07
- **Email:** debilovdenis177@gmail.com
