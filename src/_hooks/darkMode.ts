import { on } from 'events';

export function useIsSystemDark(
	onChange?: (event: MediaQueryListEvent) => any
) {
	const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
	onChange && mediaQuery.addEventListener('change', onChange);
	return { systemThemeDark: mediaQuery.matches };
}

export function useIsClassDark() {
	return document.documentElement.classList.contains('dark');
}
