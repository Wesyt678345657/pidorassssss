import Link from 'next/link';

export default function Footer() {
	return (
		<footer style={{
			marginTop: 64,
			padding: '32px 24px',
			borderTop: '1px solid rgba(255,255,255,.06)',
			background: 'var(--card)'
		}}>
			<div className="container" style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
				gap: 32,
				marginBottom: 24
			}}>
				<div>
					<h3 style={{ margin: '0 0 12px 0', fontSize: 16 }}>О нас</h3>
					<p className="muted" style={{ margin: 0, fontSize: 14, lineHeight: 1.6 }}>
						Мы — команда, которая верит в свежие, натуральные продукты. Работаем напрямую с фермерами и хозяйствами для доставки лучшего качества.
					</p>
				</div>
				
				<div>
					<h3 style={{ margin: '0 0 12px 0', fontSize: 16 }}>Каталог</h3>
					<ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
						<li><Link href="/products" style={{ color: 'var(--muted)', fontSize: 14 }}>Все товары</Link></li>
						<li><Link href="/products?category=Овощи" style={{ color: 'var(--muted)', fontSize: 14 }}>Овощи</Link></li>
						<li><Link href="/products?category=Фрукты" style={{ color: 'var(--muted)', fontSize: 14 }}>Фрукты</Link></li>
						<li><Link href="/products?category=Молочка" style={{ color: 'var(--muted)', fontSize: 14 }}>Молочка</Link></li>
						<li><Link href="/products?category=Мясо" style={{ color: 'var(--muted)', fontSize: 14 }}>Мясо</Link></li>
					</ul>
				</div>

				<div>
					<h3 style={{ margin: '0 0 12px 0', fontSize: 16 }}>Информация</h3>
					<ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
						<li><Link href="/cart" style={{ color: 'var(--muted)', fontSize: 14 }}>Корзина</Link></li>
						<li><Link href="/checkout" style={{ color: 'var(--muted)', fontSize: 14 }}>Оформление</Link></li>
						<li><span style={{ color: 'var(--muted)', fontSize: 14, cursor: 'default' }}>Доставка</span></li>
						<li><span style={{ color: 'var(--muted)', fontSize: 14, cursor: 'default' }}>Оплата</span></li>
					</ul>
				</div>

				<div>
					<h3 style={{ margin: '0 0 12px 0', fontSize: 16 }}>Контакты</h3>
					<div style={{ display: 'grid', gap: 8 }}>
						<span className="muted" style={{ fontSize: 14 }}>Телефон: <a href="tel:+79085832307" style={{ color: 'var(--accent)' }}>+7 (908) 583-23-07</a></span>
						<span className="muted" style={{ fontSize: 14 }}>Email: <a href="mailto:debilovdenis177@gmail.com" style={{ color: 'var(--accent)' }}>debilovdenis177@gmail.com</a></span>
						<span className="muted" style={{ fontSize: 14 }}>Доставка: Ежедневно 9:00 - 21:00</span>
					</div>
				</div>
			</div>

			<div style={{
				paddingTop: 24,
				borderTop: '1px solid rgba(255,255,255,.06)',
				textAlign: 'center'
			}}>
				<p className="muted" style={{ margin: 0, fontSize: 14 }}>
					© 2024 Фермерский Маркет. Все права защищены.
				</p>
			</div>
		</footer>
	);
}

