import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductBySlug, products } from '@/data/products';
import { AddToCartButton } from './sections';
import { formatCurrencyRub } from '../../../lib/currency';

export default function ProductDetail({ params }: { params: { slug: string } }) {
	const product = getProductBySlug(params.slug);
	if (!product) return notFound();
    const imageSrc = product.image || 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop';
	return (
		<div style={{display:'grid', gap: 16}}>
            <Image src={imageSrc} alt={product.title} width={900} height={600} style={{width:'100%', height: 360, objectFit:'cover', borderRadius: 12}} />
			<h1 style={{marginBottom:0}}>{product.title}</h1>
			<p className="muted" style={{marginTop:0}}>{product.farmer}</p>
			<p>{product.description}</p>
			<div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
				<div><strong className="price">{formatCurrencyRub(product.price)}</strong> <span className="muted">/ {product.unit}</span></div>
				<AddToCartButton product={product} />
			</div>
		</div>
	);
}

// Для статического экспорта Next.js (output: 'export') необходимо явно
// перечислить все допустимые значения динамического параметра [slug].
export function generateStaticParams() {
    return products.map(p => ({ slug: p.slug }));
}

// Запрещаем неизвестные значения slug во время билда экспорта
export const dynamicParams = false;
