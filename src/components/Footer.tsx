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
  <footer className="border-t border-skin-muted bg-skin-card/60 py-10 text-sm text-skin-muted">
    <div className="container flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-2">
        <p className="text-base font-semibold text-skin-base">{name}</p>
        <p>{location}</p>
        <a
          href={`mailto:${email}`}
          className="text-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {email}
        </a>
      </div>
      <nav aria-label="Footer quick links">
        <ul className="flex flex-wrap gap-4 text-sm font-medium text-skin-base">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <p className="text-xs text-skin-muted">
        Copyright {new Date().getFullYear()} {name}. Built for operational excellence.
      </p>
    </div>
  </footer>
);

export default Footer;
