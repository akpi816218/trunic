import '@/_styles/main.out.css';
import { NextUIProvider } from '@nextui-org/react';
import { ReactNode, StrictMode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<StrictMode>
			<NextUIProvider>{children}</NextUIProvider>
		</StrictMode>
	);
}
