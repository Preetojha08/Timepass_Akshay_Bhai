import { useEffect, useMemo, useState } from 'react';
import ThemeToggle from './ThemeToggle';

type NavbarProps = {
  name: string;
};

const links = [
  { href: '#about', label: 'About' },
  { href: '#highlights', label: 'Highlights' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = ({ name }: NavbarProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href) as HTMLElement | null)
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveLink(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: '-55% 0px -35% 0px',
        threshold: [0.2, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const containerClasses = useMemo(
    () =>
      [
        'sticky top-0 z-50 transition-colors duration-300',
        'border-b border-skin-muted bg-skin-base/70 backdrop-blur',
        isScrolled ? 'shadow-[0_10px_30px_-20px_rgba(2,6,23,.35)]' : '',
      ]
        .filter(Boolean)
        .join(' '),
    [isScrolled],
  );

  const toggleLabel = isMenuOpen ? 'Close menu' : 'Open menu';

  const handleNavigate = () => setMenuOpen(false);

  return (
    <header className={containerClasses}>
      <nav className="container flex h-16 items-center justify-between">
        <a
          href="#about"
          className="text-base font-semibold text-skin-base transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:text-lg"
        >
          {name}
        </a>
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={toggleLabel}
            aria-expanded={isMenuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-skin-muted bg-skin-base text-skin-base shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6 text-sm font-medium text-skin-muted">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative rounded-full px-2 py-1 transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  aria-current={activeLink === link.href ? 'page' : undefined}
                >
                  <span
                    className={`absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-primary transition-opacity duration-300 ${
                      activeLink === link.href ? 'opacity-100' : 'opacity-0'
                    }`}
                    aria-hidden="true"
                  />
                  <span className={activeLink === link.href ? 'text-primary' : 'text-skin-base'}>
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
      {isMenuOpen ? (
        <div className="container relative md:hidden">
          <div className="absolute left-0 right-0 top-2 rounded-2xl border border-skin-muted bg-skin-base p-4 shadow-lift">
            <ul className="flex flex-col gap-3 text-sm font-medium text-skin-base">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavigate}
                    className="block rounded-xl px-3 py-2 transition duration-200 hover:bg-skin-muted/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </header>
  );
};

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
    <path fill="currentColor" d="M4 7h16v1.5H4zm0 4.25h16v1.5H4zM4 15.5h16V17H4z" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
    <path
      fill="currentColor"
      d="m6.22 4.72l-.02.02a.75.75 0 0 0 0 1.06L10.94 11l-4.74 4.72a.75.75 0 0 0 1.04 1.08l.02-.02L12 12.06l4.72 4.74a.75.75 0 0 0 1.08-1.04l-.02-.02L13.06 11l4.74-4.72a.75.75 0 0 0-1.04-1.08l-.02.02L12 9.94L7.28 5.22a.75.75 0 0 0-1.06 0"
    />
  </svg>
);

export default Navbar;
