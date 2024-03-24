import '@/_styles/main.out.css';
import { ReactNode, StrictMode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
	return <StrictMode>{children}</StrictMode>;
}
