import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';

export const metadata: Metadata = {
	title: 'Фермерский Маркет — свежие фермерские продукты',
	description: 'Онлайн‑витрина фермерских продуктов: овощи, фрукты, молочка, мясо. Доставка по городу.',
    metadataBase: new URL('https://example.com'),
	openGraph: {
		title: 'Фермерский Маркет',
		description: 'Свежие фермерские продукты с быстрой доставкой',
		type: 'website',
		locale: 'ru_RU',
		url: 'https://example.com/',
		images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Фермерский Маркет' }],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Фермерский Маркет',
		description: 'Свежие продукты от фермеров',
		images: ['/og.jpg'],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru">
			<body>
				<CartProvider>
					<Header />
					<main className="container">{children}</main>
				</CartProvider>
			</body>
		</html>
	);
}
