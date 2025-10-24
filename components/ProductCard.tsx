"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatCurrencyRub } from '../lib/currency';

export default function ProductCard({ product }: { product: Product }) {
	const { addToCart } = useCart();
	return (
        <article className="card" style={{position:'relative'}}>
            {(product.isNew || product.isHit || product.discountPercent) && (
                <div style={{position:'absolute', left:8, top:8, display:'flex', gap:6, zIndex:2}}>
                    {product.isNew && <span style={{background:'#2ed573', color:'#0b0f0e', fontWeight:700, padding:'2px 6px', borderRadius:6,fontSize:12}}>Новинка</span>}
                    {product.isHit && <span style={{background:'#70a1ff', color:'#0b0f0e', fontWeight:700, padding:'2px 6px', borderRadius:6,fontSize:12}}>Хит</span>}
                    {product.discountPercent && <span style={{background:'#ff6b81', color:'#fff', fontWeight:700, padding:'2px 6px', borderRadius:6,fontSize:12}}>−{product.discountPercent}%</span>}
                </div>
            )}
            <Link href={`/products/${product.slug}`} style={{display:'block'}}>
                <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={180}
                    style={{width:'100%', height: 180, objectFit:'cover'}}
                />
			</Link>
			<div style={{padding: 14, display:'grid', gap: 8}}>
				<Link href={`/products/${product.slug}`}><h3 style={{margin:0, fontSize:16}}>{product.title}</h3></Link>
				<p className="muted" style={{margin:0}}>{product.farmer}</p>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                    <span className="price">
                        {product.discountPercent
                            ? (<><span style={{opacity:.7, textDecoration:'line-through', marginRight:6}}>{formatCurrencyRub(product.price)}</span>{formatCurrencyRub(Math.round(product.price*(100-product.discountPercent)/100))}</>)
                            : formatCurrencyRub(product.price)
                        } / {product.unit}
                    </span>
					<button className="btn" onClick={() => addToCart(product)}>В корзину</button>
				</div>
			</div>
		</article>
	);
}
