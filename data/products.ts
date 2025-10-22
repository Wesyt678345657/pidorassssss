export type Product = {
	id: string;
	slug: string;
	title: string;
	description: string;
	price: number; // in RUB
	image: string;
	category: string;
	farmer: string;
	unit: string; // e.g., кг, литр, шт
    // маркетинговые метки
    isNew?: boolean;
    isHit?: boolean;
    discountPercent?: number; // 0-100
};

export const products: Product[] = [
	{
		id: '1',
		slug: 'organic-apples',
		title: 'Яблоки органические',
		description: 'Сладкие и хрустящие, без химии. Сад Ивана.',
		price: 180,
		image: 'https://loremflickr.com/1200/800/apples,fruit',
		category: 'Фрукты',
		farmer: 'Иван Петров',
		unit: 'кг',
        isHit: true,
        discountPercent: 10,
	},
	{
		id: '23',
		slug: 'fresh-pears',
		title: 'Груши свежие',
		description: 'Сочные и ароматные, с собственного сада',
		price: 220,
		image: 'https://loremflickr.com/1200/800/pears,fruit',
		category: 'Фрукты',
		farmer: 'Сад "Золотая груша"',
		unit: 'кг',
        isNew: true,
	},
	{
		id: '24',
		slug: 'ripe-bananas',
		title: 'Бананы спелые',
		description: 'Сладкие, без химической обработки',
		price: 150,
		image: 'https://loremflickr.com/1200/800/bananas,fruit',
		category: 'Фрукты',
		farmer: 'Тропические сады',
		unit: 'кг',
        isHit: true,
	},
	{
		id: '25',
		slug: 'sweet-oranges',
		title: 'Апельсины сладкие',
		description: 'Сочные, с высоким содержанием витамина C',
		price: 280,
		image: 'https://loremflickr.com/1200/800/oranges,fruit',
		category: 'Фрукты',
		farmer: 'Цитрусовый сад',
		unit: 'кг',
        discountPercent: 15,
	},
	{
		id: '2',
		slug: 'goat-milk',
		title: 'Козье молоко',
		description: 'Нежное, фермерское. Утренний надой.',
		price: 260,
		image: 'https://loremflickr.com/1200/800/goat%20milk,milk,dairy',
		category: 'Молочные продукты',
		farmer: 'Ферма "Белая коза"',
		unit: 'литр',
        isNew: true,
	},
	{
		id: '3',
		slug: 'free-range-eggs',
		title: 'Яйца деревенские',
		description: 'Свободный выгул, желток яркий.',
		price: 120,
		image: 'https://loremflickr.com/1200/800/eggs,free-range',
		category: 'Яйца',
		farmer: 'Агро-усадьба "Лесная"',
		unit: '10 шт',
        discountPercent: 15,
	},
	{
		id: '4',
		slug: 'buckwheat-honey',
		title: 'Гречишный мёд',
		description: 'Ароматный, густой, 100% натуральный.',
		price: 450,
		image: 'https://loremflickr.com/1200/800/honey,buckwheat',
		category: 'Мёд',
		farmer: 'Пасека "Северный мёд"',
		unit: '0.5 л',
        isHit: true,
	},
    // дополнительные позиции
	{ id:'5', slug:'chicken-fillets', title:'Куриное филе', description:'Охлажденное, без кожи', price: 420, image:'https://loremflickr.com/1200/800/chicken,fillet,meat', category:'Мясо', farmer:'Эко‑ферма «Север»', unit:'кг', isHit:true },
	{ id:'6', slug:'beef-steak', title:'Стейк говяжий', description:'Мраморная говядина, сухое вызревание', price: 1290, image:'https://loremflickr.com/1200/800/beef,steak,meat', category:'Мясо', farmer:'Ферма «Альфа»', unit:'кг', discountPercent:12 },
	{ id:'7', slug:'turkey-mince', title:'Фарш индейки', description:'Нежный диетический фарш', price: 520, image:'https://loremflickr.com/1200/800/turkey,ground,meat', category:'Мясо', farmer:'Инди‑ферма', unit:'кг' },
	{ id:'8', slug:'fresh-salmon', title:'Лосось свежий', description:'Филе без костей', price: 1790, image:'https://loremflickr.com/1200/800/salmon,fish,fillet', category:'Рыба', farmer:'Баренц‑рыбпром', unit:'кг', isHit:true },
	{ id:'9', slug:'red-caviar', title:'Икра лососевая', description:'Крупное зерно, пастеризованная', price: 2590, image:'https://loremflickr.com/1200/800/red%20caviar,salmon%20roe', category:'Рыба', farmer:'Северные моря', unit:'0.5 кг' },
	{ id:'10', slug:'cheese-parmesan', title:'Сыр Пармезан', description:'Выдержка 12 месяцев', price: 1350, image:'https://loremflickr.com/1200/800/parmesan,cheese', category:'Сыры', farmer:'Сыроварня «Луга»', unit:'кг', isHit:true },
	{ id:'11', slug:'cheese-mozzarella', title:'Сыр Моцарелла', description:'Молодой, для салатов и пиццы', price: 420, image:'https://loremflickr.com/1200/800/mozzarella,cheese', category:'Сыры', farmer:'Сырная долина', unit:'250 г', isNew:true },
	{ id:'12', slug:'bread-sourdough', title:'Хлеб на закваске', description:'Пшенично‑ржаной, ремесленный', price: 120, image:'https://loremflickr.com/1200/800/sourdough,bread,loaf', category:'Хлеб и выпечка', farmer:'Пекарня «Утро»', unit:'батон' },
	{ id:'13', slug:'butter-ghee', title:'Топленое масло гхи', description:'Чистый сливочный вкус', price: 690, image:'https://loremflickr.com/1200/800/ghee,clarified%20butter', category:'Молочные продукты', farmer:'Ферма «Радуга»', unit:'450 г' },
	{ id:'14', slug:'yogurt-natural', title:'Йогурт натуральный', description:'Без сахара, живые культуры', price: 95, image:'https://loremflickr.com/1200/800/yogurt,natural,dairy', category:'Молочные продукты', farmer:'Молочная долина', unit:'200 г', discountPercent:20 },
	{ id:'15', slug:'strawberries', title:'Клубника', description:'Ароматная, спелая', price: 320, image:'https://loremflickr.com/1200/800/strawberries,berries', category:'Ягоды', farmer:'Сад «Южный»', unit:'кг', isHit:true },
	{ id:'16', slug:'tomatoes', title:'Помидоры розовые', description:'Сладкие, мясистые', price: 240, image:'https://loremflickr.com/1200/800/tomatoes,vegetable', category:'Овощи', farmer:'Теплица №7', unit:'кг' },
	{ id:'17', slug:'cucumbers', title:'Огурцы грунтовые', description:'Хрустящие, ароматные', price: 190, image:'https://loremflickr.com/1200/800/cucumbers,vegetable', category:'Овощи', farmer:'Теплица №7', unit:'кг' },
	{ id:'18', slug:'buckwheat', title:'Крупа гречневая', description:'Ядрица, крупный помол', price: 110, image:'https://loremflickr.com/1200/800/buckwheat,groats,grains', category:'Бакалея', farmer:'Алтай‑зерно', unit:'1 кг' },
	{ id:'19', slug:'honey-acacia', title:'Мёд акациевый', description:'Лёгкий цветочный аромат', price: 520, image:'https://loremflickr.com/1200/800/honey,acacia', category:'Мёд', farmer:'Пасека «Северный мёд»', unit:'0.5 л', isNew:true },
	{ id:'20', slug:'berries-mix', title:'Смесь ягод замороженная', description:'Клубника, смородина, черника', price: 390, image:'https://loremflickr.com/1200/800/frozen,berries,mix', category:'Замороженные продукты', farmer:'Фрост‑фуд', unit:'1 кг' },
	{ id:'21', slug:'cookies-oat', title:'Печенье овсяное', description:'На сливочном масле', price: 160, image:'https://loremflickr.com/1200/800/oatmeal,cookies,biscuits', category:'Сладости', farmer:'Кондитерская «Лист»', unit:'300 г' },
	{ id:'22', slug:'sunflower-oil-cold', title:'Масло подсолнечное холодного отжима', description:'Нерафинированное', price: 310, image:'https://loremflickr.com/1200/800/sunflower,oil,bottle', category:'ЗОЖ', farmer:'Эко‑маслодел', unit:'0.5 л' },
];

export function getProductBySlug(slug: string): Product | undefined {
	return products.find(p => p.slug === slug);
}
