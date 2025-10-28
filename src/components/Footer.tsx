type FooterProps = {
  name: string;
  location: string;
  email: string;
};

const quickLinks = [
  { href: '#about', label: 'About' },
  { href: '#highlights', label: 'Highlights' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const Footer = ({ name, location, email }: FooterProps) => (
  <footer className="mt-12 border-t border-slate-800/40 py-8 text-sm text-slate-400 sm:mt-16 lg:mt-20 dark:border-slate-700 dark:text-slate-500">
    <div className="container flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-2">
        <p className="text-base font-semibold text-slate-900 dark:text-slate-100">{name}</p>
        <p>{location}</p>
        <a className="text-sky-500 underline-offset-4 hover:underline" href={`mailto:${email}`}>
          {email}
        </a>
      </div>
      <nav aria-label="Footer quick links">
        <ul className="flex flex-wrap gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <a className="transition hover:text-sky-500" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <p className="text-xs">
        Copyright {new Date().getFullYear()} {name}. Built for operational excellence.
      </p>
    </div>
  </footer>
);

export default Footer;
