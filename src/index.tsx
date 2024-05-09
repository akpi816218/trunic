import { createRoot } from 'react-dom/client';
import App from './App';
import { useIsSystemDark } from './_hooks';

createRoot(document.getElementById('root')!).render(<App />);

const { systemThemeDark } = useIsSystemDark(event => {
	if (event.matches) document.documentElement.classList.add('dark');
	else document.documentElement.classList.remove('dark');
});

if (systemThemeDark) document.documentElement.classList.add('dark');
else document.documentElement.classList.remove('dark');
