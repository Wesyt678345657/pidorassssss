"use client";
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Suspense, useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

function ProductsInner() {
    const params = useSearchParams();
    const [query, setQuery] = useState('');
    const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);

    const filtered = useMemo(() => {
        return products.filter(p => {
            const matchesQuery = (p.title + ' ' + (p as any).description ?? '').toLowerCase().includes(query.toLowerCase());
            const matchesPrice = maxPrice ? p.price <= maxPrice : true;
            return matchesQuery && matchesPrice;
        });
    }, [query, maxPrice]);

    useEffect(()=>{
        const q = params.get('q') || '';
        setQuery(q);
    }, [params]);

    return (
        <div>
            <h1 style={{fontSize:24}}>Каталог</h1>
            <div className="card" style={{marginTop:12, marginBottom:12, display:'grid', gap:12}}>
                <input
                    placeholder="Поиск по товарам"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    style={{padding:10, border:'1px solid #ddd', borderRadius:8}}
                />
                <div style={{display:'flex', gap:12, alignItems:'center'}}>
                    <label style={{whiteSpace:'nowrap'}}>Цена до:</label>
                    <input
                        type="number"
                        min={0}
                        placeholder="без лимита"
                        value={maxPrice ?? ''}
                        onChange={e => setMaxPrice(e.target.value ? Number(e.target.value) : undefined)}
                        style={{padding:10, border:'1px solid #ddd', borderRadius:8, width:140}}
                    />
                    {maxPrice !== undefined && (
                        <button className="btn" onClick={() => setMaxPrice(undefined)}>Сбросить</button>
                    )}
                </div>
            </div>
            <div className="grid" style={{marginTop: 12}}>
                {filtered.map(p => (
                    <ProductCard key={p.id} product={p} />
                ))}
                {filtered.length === 0 && <p className="muted">Ничего не найдено.</p>}
            </div>
        </div>
    );
}

export default function ProductsPage() {
    return (
        <Suspense fallback={<div className="card" style={{padding:16}}>Загрузка…</div>}>
            <ProductsInner />
        </Suspense>
    );
}
