"use client";

import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { formatCurrencyRub } from '../../lib/currency';

export default function CheckoutPage() {
	const { state, subtotal, shipping, total, clearCart } = useCart();
	const items = state.items;
	const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);
	const [formData, setFormData] = useState({
		customerName: '',
		phone: '',
		email: '',
		address: ''
	});

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setStatus('loading');

		try {
			const orderData = {
				customerName: formData.customerName,
				phone: formData.phone,
				email: formData.email,
				address: formData.address,
				items: (items || []).map(item => ({
					title: item.title,
					quantity: item.quantity,
					price: item.price
				})),
				totalAmount: total,
				status: 'Новый'
			};

			const response = await fetch('/api/orders', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(orderData),
			});

			if (response.ok) {
				setStatus('success');
				clearCart();
			} else {
				setStatus('error');
			}
		} catch (error) {
			console.error('Ошибка при создании заказа:', error);
			setStatus('error');
		}
	}

	if (status === 'success') {
		return (
			<div style={{display:'grid', gap: 12}}>
				<h1>Спасибо за заказ!</h1>
				<p className="muted">Мы свяжемся с вами для подтверждения.</p>
				<p className="muted">Заказ сохранен в нашей системе.</p>
			</div>
		);
	}

	if (status === 'error') {
		return (
			<div style={{display:'grid', gap: 12}}>
				<h1>Ошибка при создании заказа</h1>
				<p className="muted">Попробуйте еще раз или свяжитесь с нами по телефону +7 (908) 583-23-07</p>
				<button className="btn" onClick={() => setStatus('idle')}>Попробовать снова</button>
			</div>
		);
	}

	if (!mounted) {
		return (
			<div style={{display:'grid', gap: 12}}>
				<h1>Загрузка...</h1>
			</div>
		);
	}

	if (!items || items.length === 0) {
		return (
			<div style={{display:'grid', gap: 12}}>
				<h1>Корзина пуста</h1>
				<p className="muted">Добавьте товары в корзину перед оформлением заказа</p>
				<a href="/products" className="btn">Перейти к товарам</a>
			</div>
		);
	}

	return (
		<div style={{display:'grid', gap: 16}}>
			<h1>Оформление заказа</h1>
			<div className="card" style={{padding: 12, display:'grid', gap: 8, maxWidth: 520}}>
				<div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
					<span className="muted">Товары</span>
					<span className="price">{formatCurrencyRub(subtotal)}</span>
				</div>
				<div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
					<span className="muted">Доставка</span>
					<span className="price">{shipping === 0 ? 'Бесплатно' : formatCurrencyRub(shipping)}</span>
				</div>
				<div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
					<strong>Итого</strong>
					<strong className="price">{formatCurrencyRub(total)}</strong>
				</div>
			</div>
			<form onSubmit={handleSubmit} style={{display:'grid', gap: 12, maxWidth: 520}}>
				<input 
					required 
					placeholder="Имя" 
					value={formData.customerName}
					onChange={(e) => setFormData({...formData, customerName: e.target.value})}
					style={{padding: 10, borderRadius:8, border:'1px solid #2b3040', background:'#0c0f14', color:'white'}} 
				/>
				<input 
					required 
					placeholder="Телефон" 
					type="tel"
					value={formData.phone}
					onChange={(e) => setFormData({...formData, phone: e.target.value})}
					style={{padding: 10, borderRadius:8, border:'1px solid #2b3040', background:'#0c0f14', color:'white'}} 
				/>
				<input 
					placeholder="Email (необязательно)" 
					type="email"
					value={formData.email}
					onChange={(e) => setFormData({...formData, email: e.target.value})}
					style={{padding: 10, borderRadius:8, border:'1px solid #2b3040', background:'#0c0f14', color:'white'}} 
				/>
				<input 
					required 
					placeholder="Адрес доставки" 
					value={formData.address}
					onChange={(e) => setFormData({...formData, address: e.target.value})}
					style={{padding: 10, borderRadius:8, border:'1px solid #2b3040', background:'#0c0f14', color:'white'}} 
				/>
				<button 
					className="btn" 
					type="submit" 
					disabled={status === 'loading'}
					style={{opacity: status === 'loading' ? 0.6 : 1}}
				>
					{status === 'loading' ? 'Создание заказа...' : 'Подтвердить заказ'}
				</button>
			</form>
		</div>
	);
}
