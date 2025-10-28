import type { ReactNode } from 'react';
import Button from './ui/Button';

type HeroProps = {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  resumeUrl: string;
  avatarUrl: string;
};

const Hero = ({
  name,
  role,
  location,
  email,
  phone,
  linkedin,
  resumeUrl,
  avatarUrl,
}: HeroProps) => {
  const illustrationSrc = '/avatar.png';

  return (
    <div className="grid grid-cols-1 gap-10 animate-slide-up motion-reduce:animate-none md:gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
      <div className="space-y-6 md:space-y-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-500">{location}</p>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold text-slate-900 dark:text-slate-100 sm:text-5xl lg:text-6xl">
            {name}
          </h1>
          <p className="text-lg font-semibold text-slate-600 dark:text-slate-300 sm:text-xl">{role}</p>
          <p className="max-w-2xl text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            Reducing touches, increasing flow. I design warehouse programs that keep inventory honest, teams confident,
            and customers on time.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button as="a" href={resumeUrl} size="lg">
            Download CV
          </Button>
          <Button as="a" href="#contact" variant="outline" size="lg">
            Contact
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-3 text-sm text-slate-600 dark:text-slate-400 sm:grid-cols-3">
          <ContactChip href={`mailto:${email}`} label="Email" value={email}>
            <MailIcon />
          </ContactChip>
          <ContactChip href={`tel:${phone.replace(/[^+\d]/g, '')}`} label="Phone" value={phone}>
            <PhoneIcon />
          </ContactChip>
          <ContactChip href={linkedin} label="LinkedIn" value="Connect" external>
            <LinkIcon />
          </ContactChip>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="group relative inline-flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72 lg:h-80 lg:w-80">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400/30 via-emerald-400/20 to-transparent blur-2xl" />
          <div className="flip-card relative h-full w-full rounded-full bg-white/70 shadow-lift backdrop-blur dark:bg-slate-900/60">
            <div className="flip-card-inner rounded-full">
              <div className="flip-card-face flex items-center justify-center rounded-full">
                <img
                  src={illustrationSrc}
                  alt={`Illustration of ${name}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full rounded-full object-cover"
                  onError={(event) => {
                    event.currentTarget.src = avatarUrl;
                  }}
                />
              </div>
              <div className="flip-card-face flip-card-back flex items-center justify-center rounded-full bg-sky-500/10 text-5xl font-bold text-sky-500 sm:text-6xl">
                AD
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type ContactChipProps = {
  href: string;
  label: string;
  value: string;
  children: ReactNode;
  external?: boolean;
};

const ContactChip = ({ href, label, value, children, external }: ContactChipProps) => (
  <a
    href={href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
    className="group flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-white/70 px-5 py-4 text-sm font-medium text-slate-900 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-sky-400 focus-visible:outline-0 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-100"
  >
    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/10 text-sky-500 transition duration-300 group-hover:bg-sky-500/20 sm:h-14 sm:w-14">
      {children}
    </span>
    <span className="flex flex-col">
      <span className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</span>
      <span className="font-semibold text-slate-900 dark:text-slate-100">{value}</span>
    </span>
  </a>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true">
    <path
      fill="currentColor"
      d="M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m0 2v.51l7 4.2l7-4.2V7zm0 2.88V17h14v-7.12l-6.38 3.82a1.5 1.5 0 0 1-1.24 0z"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true">
    <path
      fill="currentColor"
      d="M6.62 3h2.46a1 1 0 0 1 .97.75l.54 2.16a1 1 0 0 1-.46 1.09l-1.4.9a11.36 11.36 0 0 0 4.99 4.99l.9-1.4a1 1 0 0 1 1.09-.46l2.16.54a1 1 0 0 1 .75.97V17.4a1 1 0 0 1-.94 1A15.43 15.43 0 0 1 5.6 6.56a1 1 0 0 1 1-.94"
    />
  </svg>
);

const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12.44 7.88a3 3 0 0 1 4.24 0a3 3 0 0 1 0 4.24l-2.12 2.12a3 3 0 0 1-4.24 0a1 1 0 0 0-1.42 1.42a5 5 0 0 0 7.08 0l2.12-2.12a5 5 0 1 0-7.08-7.08l-1.3 1.3a1 1 0 1 0 1.42 1.42zm-.88 8.24a3 3 0 0 1-4.24 0a3 3 0 0 1 0-4.24l2.12-2.12a3 3 0 0 1 4.24 0a1 1 0 0 0 1.42-1.42a5 5 0 0 0-7.08 0L6.9 10.5a5 5 0 1 0 7.08 7.08l1.3-1.3a1 1 0 1 0-1.42-1.42z"
    />
  </svg>
);

export default Hero;
