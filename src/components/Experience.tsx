type ExperienceItem = {
  company: string;
  title: string;
  period: string;
  bullets: string[];
};

type ExperienceProps = {
  items: ExperienceItem[];
};

const Experience = ({ items }: ExperienceProps) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    {items.map((item) => (
      <article
        key={`${item.company}-${item.title}`}
        className="group flex h-full flex-col justify-between rounded-2xl border border-skin-muted bg-skin-card p-6 shadow-[0_6px_30px_-10px_rgba(2,6,23,.25)] transition duration-300 hover:-translate-y-0.5 hover:border-primary"
      >
        <header className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">{item.company}</p>
          <h3 className="text-lg font-semibold text-skin-base">{item.title}</h3>
          <p className="text-sm text-skin-muted">{item.period}</p>
        </header>
        <ul className="mt-4 space-y-2 text-sm text-skin-muted">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span aria-hidden="true" className="pt-1 text-accent">
                -
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </article>
    ))}
  </div>
);

export type { ExperienceItem };
export default Experience;

