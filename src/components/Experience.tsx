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
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
    {items.map((item, index) => (
      <article
        key={`${item.company}-${item.title}`}
        className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-sky-400 animate-slide-up motion-reduce:animate-none dark:border-slate-800 dark:bg-slate-900/60"
        style={{ animationDelay: `${index * 0.12}s` }}
      >
        <header className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sky-500">{item.company}</p>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">{item.period}</p>
        </header>
        <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span aria-hidden="true" className="pt-1 text-emerald-400">
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
