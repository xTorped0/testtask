import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'GitHub Checker',
	description: 'GitHub Checker',
	viewport: 'width=device-width, initial-scale=1'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<AppRouterCacheProvider>{children}</AppRouterCacheProvider>
			</body>
		</html>
	);
}
