export type ThemePreference = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'theme';

const isBrowser = () => typeof window !== 'undefined' && typeof document !== 'undefined';

const getSystemTheme = (): 'light' | 'dark' => {
  if (!isBrowser()) {
    return 'light';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const getInitialTheme = (): ThemePreference => {
  if (!isBrowser()) {
    return 'light';
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark' || stored === 'system') {
    return stored;
  }

  return 'system';
};

export const applyTheme = (preference: ThemePreference): 'light' | 'dark' => {
  if (!isBrowser()) {
    return 'light';
  }

  const resolved = preference === 'system' ? getSystemTheme() : preference;
  const root = document.documentElement;

  root.classList.remove('light', 'dark');
  root.classList.add(resolved === 'dark' ? 'dark' : 'light');
  root.setAttribute('data-theme-preference', preference);
  root.style.colorScheme = resolved;

  window.localStorage.setItem(STORAGE_KEY, preference);

  return resolved;
};

export const toggleTheme = (current: ThemePreference): ThemePreference => {
  const order: ThemePreference[] = ['light', 'dark', 'system'];
  return order[(order.indexOf(current) + 1) % order.length];
};

