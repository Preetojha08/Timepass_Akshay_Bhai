type Project = {
  title: string;
  result: string;
  detail: string;
};

type ProjectsProps = {
  items: Project[];
};

const Projects = ({ items }: ProjectsProps) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
    {items.map((item, index) => (
      <article
        key={item.title}
        className="group h-full rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-sky-400 animate-slide-up motion-reduce:animate-none dark:border-slate-800 dark:bg-slate-900/60"
        style={{ animationDelay: `${index * 0.12}s` }}
      >
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
        <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-sky-500">{item.result}</p>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{item.detail}</p>
      </article>
    ))}
  </div>
);

export type { Project };
export default Projects;
