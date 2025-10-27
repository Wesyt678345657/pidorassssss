"use client";

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { useMemo, useState, useEffect } from 'react';
import { products } from '@/data/products';

export default function Header() {
    const { totalItems } = useCart();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    const router = useRouter();
    const [query, setQuery] = useState('');
    const [focused, setFocused] = useState(false);
    const onSearch = () => {
        const q = query.trim();
        router.push(q ? `/products?q=${encodeURIComponent(q)}` : '/products');
    };

    const suggestions = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (q.length < 2) return [] as typeof products;
        return products.filter(p => (p.title + ' ' + p.category + ' ' + p.farmer).toLowerCase().includes(q)).slice(0, 6);
    }, [query]);
	return (
		<header className="header" style={{position:'sticky', top:0, zIndex:50, backdropFilter:'saturate(180%) blur(6px)'}}>
            <nav className="container" style={{display:'grid', gridTemplateColumns:'auto 1fr auto', alignItems:'center', gap: 12}}>
                <Link href="/products" className="btn" style={{borderRadius:12, display:'inline-flex', alignItems:'center', gap:8}} aria-label="Каталог">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 8v-8h8v8h-8z"/></svg>
                    <span>Каталог</span>
                </Link>

                <div style={{display:'flex', alignItems:'center', gap:12}}>
                    <div style={{position:'relative', flex:1}}>
                        <span style={{position:'absolute', left:10, top:'50%', transform:'translateY(-50%)', opacity:.6}}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                        </span>
                        <input
                            placeholder="Поиск"
                            value={query}
                            onChange={e=>setQuery(e.target.value)}
                            onKeyDown={e=>{ if(e.key==='Enter'){ onSearch(); } }}
                            onFocus={()=>setFocused(true)}
                            onBlur={()=>setTimeout(()=>setFocused(false), 120)}
                            style={{width:'100%', padding:'10px 12px 10px 32px', border:'1px solid rgba(255,255,255,.12)', borderRadius:12, background:'rgba(255,255,255,.06)', color:'inherit'}}
                            aria-label="Поиск по каталогу"
                        />

                        {(focused && suggestions.length > 0) && (
                            <div className="card" style={{position:'absolute', left:0, right:0, top:'calc(100% + 8px)', padding:8, borderRadius:12, animation:'fadeInUp .18s ease-out'}}>
                                {suggestions.map(s => (
                                    <button key={s.id}
                                        onMouseDown={e=>{ e.preventDefault(); router.push(`/products/${s.slug}`); setFocused(false);} }
                                        style={{display:'grid', gridTemplateColumns:'40px 1fr auto', gap:10, alignItems:'center', width:'100%', background:'transparent', color:'inherit', border:'none', textAlign:'left', padding:6, borderRadius:8, cursor:'pointer'}}>
                                        <span style={{width:40, height:40, background:'rgba(255,255,255,.06)', borderRadius:8, display:'inline-flex', alignItems:'center', justifyContent:'center', fontSize:12}}>🛒</span>
                                        <span style={{display:'grid'}}>
                                            <strong style={{fontWeight:600}}>{s.title}</strong>
                                            <span style={{opacity:.7, fontSize:12}}>{s.category}</span>
                                        </span>
                                        <span style={{fontWeight:700}}>{s.price} ₽</span>
                                    </button>
                                ))}
                                <hr style={{border:'none', borderTop:'1px solid rgba(255,255,255,.06)', margin:'6px 0'}} />
                                <button onMouseDown={(e)=>{e.preventDefault(); onSearch();}}
                                        style={{width:'100%', background:'rgba(255,255,255,.08)', color:'inherit', border:'none', padding:'8px 10px', borderRadius:8, cursor:'pointer'}}>Искать “{query.trim()}” в каталоге</button>
                            </div>
                        )}
                    </div>
                </div>

                <div style={{display:'flex', gap:10, alignItems:'center', justifyContent:'flex-end'}}>
                    <Link href="/cart" className="btn" style={{position:'relative', borderRadius:12, display:'inline-flex', alignItems:'center', gap:8}} aria-label="Корзина">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 14.26l.03.14c.14.73.78 1.26 1.53 1.26h7.58c.69 0 1.3-.44 1.5-1.1l2.19-7.16A1 1 0 0019 6H7.21l-.2-1H3v2h2l2.6 9.26z"/></svg>
                        <span>Корзина</span>
                        {mounted && totalItems > 0 && (
                            <span style={{position:'absolute', top:-6, right:-6, background:'#ff4757', color:'#fff', borderRadius:12, padding:'2px 6px', fontSize:12}}>
                                {totalItems}
                            </span>
                        )}
                    </Link>
                </div>
			</nav>
		</header>
	);
}
