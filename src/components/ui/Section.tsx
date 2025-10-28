import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

const cn = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(' ');

const Section = ({ id, title, eyebrow, description, children, className }: SectionProps) => (
  <section id={id} aria-labelledby={`${id}-title`} className={cn('py-12 sm:py-16 lg:py-24', className)}>
    <div className="animate-fade-in space-y-8">
      <div className="max-w-3xl space-y-3">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
        ) : null}
        <h2 id={`${id}-title`} className="text-3xl font-semibold text-skin-base sm:text-4xl">
          {title}
        </h2>
        {description ? <p className="text-base text-skin-muted sm:text-lg">{description}</p> : null}
      </div>
      {children}
    </div>
  </section>
);

export type { SectionProps };
export default Section;

