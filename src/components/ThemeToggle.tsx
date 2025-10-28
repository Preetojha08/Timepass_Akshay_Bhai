import { useEffect, useMemo, useState } from 'react';
import { applyTheme, getInitialTheme, toggleTheme, type ThemePreference } from '../lib/theme';

const order: ThemePreference[] = ['light', 'dark', 'system'];

const ThemeToggle = () => {
  const [preference, setPreference] = useState<ThemePreference>(() => getInitialTheme());
  const [resolved, setResolved] = useState<'light' | 'dark'>(() =>
    typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? 'dark' : 'light',
  );

  useEffect(() => {
    const resolvedTheme = applyTheme(preference);
    setResolved(resolvedTheme);
  }, [preference]);

  useEffect(() => {
    if (preference !== 'system') {
      return;
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = (event: MediaQueryListEvent) => {
      setResolved(event.matches ? 'dark' : 'light');
    };
    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', listener);
    } else {
      media.addListener(listener);
    }

    return () => {
      if (typeof media.removeEventListener === 'function') {
        media.removeEventListener('change', listener);
      } else {
        media.removeListener(listener);
      }
    };
  }, [preference]);

  const nextPreference = useMemo(
    () => order[(order.indexOf(preference) + 1) % order.length],
    [preference],
  );

  const label = `Toggle theme, current ${preference}, switches to ${nextPreference}`;

  const handleToggle = () => {
    setPreference((current) => toggleTheme(current));
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={label}
      title={label}
      aria-pressed={resolved === 'dark'}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-transparent bg-skin-muted/60 text-skin-base transition duration-300 hover:-translate-y-0.5 hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      {resolved === 'dark' ? <MoonIcon /> : preference === 'system' ? <LaptopIcon /> : <SunIcon />}
      <span className="sr-only">{label}</span>
    </button>
  );
};

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" role="img" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12m0 2.25a.75.75 0 0 1 .75.75v1.25a.75.75 0 0 1-1.5 0V21a.75.75 0 0 1 .75-.75m0-16.5A.75.75 0 0 1 12.75 3V1.75a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 12 3.75m8.25 7.5a.75.75 0 0 1 .75.75h1.25a.75.75 0 0 1 0 1.5H21a.75.75 0 0 1-.75-.75a.75.75 0 0 1 .75-.75m-16.5 0a.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1 0-1.5H3A.75.75 0 0 1 3.75 11.25m13.838-6.088a.75.75 0 0 1 1.06 0l.884.884a.75.75 0 1 1-1.06 1.06l-.884-.884a.75.75 0 0 1 0-1.06m-11.254 11.25a.75.75 0 0 1 1.06 0l.884.884a.75.75 0 0 1-1.06 1.06l-.884-.884a.75.75 0 0 1 0-1.06m11.254 1.06a.75.75 0 0 1 1.06-1.06l.884.884a.75.75 0 0 1-1.06 1.06zM7.338 4.162a.75.75 0 0 1 0 1.06l-.884.884a.75.75 0 1 1-1.06-1.06l.884-.884a.75.75 0 0 1 1.06 0"
    />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" role="img" aria-hidden="true">
    <path
      fill="currentColor"
      d="M17.5 15.25a6.75 6.75 0 0 1-8.75-8.75a.75.75 0 0 0-1.04-.92A7.5 7.5 0 1 0 17.25 18.54a.75.75 0 0 0-.92-1.04q.58-1.01 1.17-2.25"
    />
  </svg>
);

const LaptopIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" role="img" aria-hidden="true">
    <path
      fill="currentColor"
      d="M5 6.75A1.75 1.75 0 0 1 6.75 5h10.5A1.75 1.75 0 0 1 19 6.75v6.5A1.75 1.75 0 0 1 17.25 15H6.75A1.75 1.75 0 0 1 5 13.25zM3 17.25A1.75 1.75 0 0 1 4.75 15.5h14.5A1.75 1.75 0 0 1 21 17.25V18a.75.75 0 0 1-.75.75H3.75A.75.75 0 0 1 3 18z"
    />
  </svg>
);

export default ThemeToggle;
