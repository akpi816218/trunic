import '@/_styles/main.out.css';
import { NextUIProvider } from '@nextui-org/react';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
	return <NextUIProvider>{children}</NextUIProvider>;
}
