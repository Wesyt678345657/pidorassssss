import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function HomePage() {
	return (
		<div>
            <section className="card" style={{display:'grid', gridTemplateColumns:'1.2fr 1fr', gap: 16, marginBottom: 24, alignItems:'center', padding:16}}>
                <div>
                    <h1 style={{margin: 0, fontSize: 30, lineHeight: 1.2}}>Фермерские продукты с доставкой</h1>
                    <p className="muted" style={{marginTop:8}}>Натурально. Быстро. От проверенных фермеров.</p>
                    <div style={{display:'flex', gap:12, marginTop:12}}>
                        <Link className="btn" href="/products">Каталог</Link>
                        <Link className="btn" href="/cart">Корзина</Link>
                    </div>
                </div>
                <div className="skeleton" style={{borderRadius:12, height:160}} />
            </section>
            
            <section style={{marginTop: 28}}>
                <h2 style={{fontSize: 20}}>Сейчас сезон</h2>
                <div className="grid" style={{marginTop: 12}}>
                    {products.filter(p=>p.category==='Фрукты').map(p => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </section>

			<section style={{marginTop: 28}}>
				<h2 style={{fontSize: 20}}>Популярное</h2>
				<div className="grid" style={{marginTop: 12}}>
					{products.map(p => (
						<ProductCard key={p.id} product={p} />
					))}
				</div>
			</section>

            <section style={{marginTop: 28}}>
                <h2 style={{fontSize:20}}>Почему мы</h2>
                <div className="grid" style={{marginTop:12}}>
                    <article className="card" style={{padding:16, display:'grid', gap:8}}>
                        <strong>Проверенные фермеры</strong>
                        <p className="muted" style={{margin:0}}>Работаем напрямую с хозяйствами, знаем происхождение каждого продукта.</p>
                    </article>
                    <article className="card" style={{padding:16, display:'grid', gap:8}}>
                        <strong>Натуральный состав</strong>
                        <p className="muted" style={{margin:0}}>Без лишних добавок. Мы выбираем продукты, которые едим сами.</p>
                    </article>
                    <article className="card" style={{padding:16, display:'grid', gap:8}}>
                        <strong>Быстрая доставка</strong>
                        <p className="muted" style={{margin:0}}>Доставим в удобный день. Бесплатно от 1000 ₽.</p>
                    </article>
                    <article className="card" style={{padding:16, display:'grid', gap:8}}>
                        <strong>Честные цены</strong>
                        <p className="muted" style={{margin:0}}>Без посредников: оплата фермеру — вы платите меньше, он получает больше.</p>
                    </article>
                </div>
            </section>

			{/* Статистика в самом низу страницы */}
			<section style={{marginTop: 28}}>
				<h2 style={{fontSize:20}}>Наши достижения</h2>
				<div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:16, marginTop:12}}>
					<div className="card" style={{padding:20, textAlign:'center'}}>
						<div style={{fontSize:32, fontWeight:'bold', color:'#22c55e', marginBottom:8}}>17</div>
						<h3 style={{margin:0, fontSize:16, color:'#22c55e'}}>заведений</h3>
						<p className="muted" style={{margin:0, marginTop:4, fontSize:14}}>Ежедневно ждут своих гостей</p>
					</div>
					<div className="card" style={{padding:20, textAlign:'center'}}>
						<div style={{fontSize:32, fontWeight:'bold', color:'#22c55e', marginBottom:8}}>5+</div>
						<h3 style={{margin:0, fontSize:16, color:'#22c55e'}}>лет</h3>
						<p className="muted" style={{margin:0, marginTop:4, fontSize:14}}>Успешно работаем и кормим Челябинск</p>
					</div>
					<div className="card" style={{padding:20, textAlign:'center'}}>
						<div style={{fontSize:32, fontWeight:'bold', color:'#22c55e', marginBottom:8}}>50+</div>
						<h3 style={{margin:0, fontSize:16, color:'#22c55e'}}>блюд</h3>
						<p className="muted" style={{margin:0, marginTop:4, fontSize:14}}>Вкусных и сытных каждую неделю</p>
					</div>
					<div className="card" style={{padding:20, textAlign:'center'}}>
						<div style={{fontSize:32, fontWeight:'bold', color:'#22c55e', marginBottom:8}}>24/7</div>
						<h3 style={{margin:0, fontSize:16, color:'#22c55e'}}>онлайн</h3>
						<p className="muted" style={{margin:0, marginTop:4, fontSize:14}}>Кормим ежедневно, доставляем круглосуточно</p>
					</div>
					<div className="card" style={{padding:20, textAlign:'center'}}>
						<div style={{fontSize:32, fontWeight:'bold', color:'#22c55e', marginBottom:8}}>700K+</div>
						<h3 style={{margin:0, fontSize:16, color:'#22c55e'}}>клиентов</h3>
						<p className="muted" style={{margin:0, marginTop:4, fontSize:14}}>Сытых и довольных в 2024 году</p>
					</div>
					<div className="card" style={{padding:20, textAlign:'center'}}>
						<div style={{fontSize:32, fontWeight:'bold', color:'#22c55e', marginBottom:8}}>100%</div>
						<h3 style={{margin:0, fontSize:16, color:'#22c55e'}}>натуральные</h3>
						<p className="muted" style={{margin:0, marginTop:4, fontSize:14}}>Проверенные продукты без химикатов и ГМО</p>
					</div>
				</div>
			</section>
		</div>
	);
}
