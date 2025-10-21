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
		image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=1200&auto=format&fit=crop',
		category: 'Фрукты',
		farmer: 'Иван Петров',
		unit: 'кг',
        isHit: true,
        discountPercent: 10,
	},
	{
		id: '2',
		slug: 'goat-milk',
		title: 'Козье молоко',
		description: 'Нежное, фермерское. Утренний надой.',
		price: 260,
		image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=1200&auto=format&fit=crop',
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
		image: 'https://images.unsplash.com/photo-1517959105821-eaf2591984dd?q=80&w=1200&auto=format&fit=crop',
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
		image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
		category: 'Мёд',
		farmer: 'Пасека "Северный мёд"',
		unit: '0.5 л',
        isHit: true,
	},
    // дополнительные позиции
    { id:'5', slug:'chicken-fillets', title:'Куриное филе', description:'Охлажденное, без кожи', price: 420, image:'https://images.unsplash.com/photo-1604908553985-c8b3a3b3d2c6?q=80&w=1200&auto=format&fit=crop', category:'Мясо', farmer:'Эко‑ферма «Север»', unit:'кг', isHit:true },
    { id:'6', slug:'beef-steak', title:'Стейк говяжий', description:'Мраморная говядина, сухое вызревание', price: 1290, image:'https://images.unsplash.com/photo-1551024709-8f23befc6cf7?q=80&w=1200&auto=format&fit=crop', category:'Мясо', farmer:'Ферма «Альфа»', unit:'кг', discountPercent:12 },
    { id:'7', slug:'turkey-mince', title:'Фарш индейки', description:'Нежный диетический фарш', price: 520, image:'https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?q=80&w=1200&auto=format&fit=crop', category:'Мясо', farmer:'Инди‑ферма', unit:'кг' },
    { id:'8', slug:'fresh-salmon', title:'Лосось свежий', description:'Филе без костей', price: 1790, image:'https://images.unsplash.com/photo-1514516870926-205989b0966b?q=80&w=1200&auto=format&fit=crop', category:'Рыба', farmer:'Баренц‑рыбпром', unit:'кг', isHit:true },
    { id:'9', slug:'red-caviar', title:'Икра лососевая', description:'Крупное зерно, пастеризованная', price: 2590, image:'https://images.unsplash.com/photo-1604908554160-261a3c984d4a?q=80&w=1200&auto=format&fit=crop', category:'Рыба', farmer:'Северные моря', unit:'0.5 кг' },
    { id:'10', slug:'cheese-parmesan', title:'Сыр Пармезан', description:'Выдержка 12 месяцев', price: 1350, image:'https://images.unsplash.com/photo-1547573854-74d2a71d0826?q=80&w=1200&auto=format&fit=crop', category:'Сыры', farmer:'Сыроварня «Луга»', unit:'кг', isHit:true },
    { id:'11', slug:'cheese-mozzarella', title:'Сыр Моцарелла', description:'Молодой, для салатов и пиццы', price: 420, image:'https://images.unsplash.com/photo-1625944526287-8d7cbdeb18f7?q=80&w=1200&auto=format&fit=crop', category:'Сыры', farmer:'Сырная долина', unit:'250 г', isNew:true },
    { id:'12', slug:'bread-sourdough', title:'Хлеб на закваске', description:'Пшенично‑ржаной, ремесленный', price: 120, image:'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=1200&auto=format&fit=crop', category:'Хлеб и выпечка', farmer:'Пекарня «Утро»', unit:'батон' },
    { id:'13', slug:'butter-ghee', title:'Топленое масло гхи', description:'Чистый сливочный вкус', price: 690, image:'https://images.unsplash.com/photo-1586201375761-83865001e31b?q=80&w=1200&auto=format&fit=crop', category:'Молочные продукты', farmer:'Ферма «Радуга»', unit:'450 г' },
    { id:'14', slug:'yogurt-natural', title:'Йогурт натуральный', description:'Без сахара, живые культуры', price: 95, image:'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=1200&auto=format&fit=crop', category:'Молочные продукты', farmer:'Молочная долина', unit:'200 г', discountPercent:20 },
    { id:'15', slug:'strawberries', title:'Клубника', description:'Ароматная, спелая', price: 320, image:'https://images.unsplash.com/photo-1438075190890-39d4f462f8ad?q=80&w=1200&auto=format&fit=crop', category:'Ягоды', farmer:'Сад «Южный»', unit:'кг', isHit:true },
    { id:'16', slug:'tomatoes', title:'Помидоры розовые', description:'Сладкие, мясистые', price: 240, image:'https://images.unsplash.com/photo-1567303312574-2ec041f1a05f?q=80&w=1200&auto=format&fit=crop', category:'Овощи', farmer:'Теплица №7', unit:'кг' },
    { id:'17', slug:'cucumbers', title:'Огурцы грунтовые', description:'Хрустящие, ароматные', price: 190, image:'https://images.unsplash.com/photo-1567302547923-8c0b0d274a0f?q=80&w=1200&auto=format&fit=crop', category:'Овощи', farmer:'Теплица №7', unit:'кг' },
    { id:'18', slug:'buckwheat', title:'Крупа гречневая', description:'Ядрица, крупный помол', price: 110, image:'https://images.unsplash.com/photo-1604908554336-3a6c2fbc508d?q=80&w=1200&auto=format&fit=crop', category:'Бакалея', farmer:'Алтай‑зерно', unit:'1 кг' },
    { id:'19', slug:'honey-acacia', title:'Мёд акациевый', description:'Лёгкий цветочный аромат', price: 520, image:'https://images.unsplash.com/photo-1474533410427-a23da4fd49d0?q=80&w=1200&auto=format&fit=crop', category:'Мёд', farmer:'Пасека «Северный мёд»', unit:'0.5 л', isNew:true },
    { id:'20', slug:'berries-mix', title:'Смесь ягод замороженная', description:'Клубника, смородина, черника', price: 390, image:'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1200&auto=format&fit=crop', category:'Замороженные продукты', farmer:'Фрост‑фуд', unit:'1 кг' },
    { id:'21', slug:'cookies-oat', title:'Печенье овсяное', description:'На сливочном масле', price: 160, image:'https://images.unsplash.com/photo-1549931263-9f5c6ac91a02?q=80&w=1200&auto=format&fit=crop', category:'Сладости', farmer:'Кондитерская «Лист»', unit:'300 г' },
    { id:'22', slug:'sunflower-oil-cold', title:'Масло подсолнечное холодного отжима', description:'Нерафинированное', price: 310, image:'https://images.unsplash.com/photo-1542442828-287ea5f99a98?q=80&w=1200&auto=format&fit=crop', category:'ЗОЖ', farmer:'Эко‑маслодел', unit:'0.5 л' },
];

export function getProductBySlug(slug: string): Product | undefined {
	return products.find(p => p.slug === slug);
}
