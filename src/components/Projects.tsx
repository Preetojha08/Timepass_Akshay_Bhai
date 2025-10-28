type Project = {
  title: string;
  result: string;
  detail: string;
};

type ProjectsProps = {
  items: Project[];
};

const Projects = ({ items }: ProjectsProps) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    {items.map((item) => (
      <article
        key={item.title}
        className="group h-full rounded-2xl border border-skin-muted bg-skin-card p-6 shadow-[0_6px_30px_-10px_rgba(2,6,23,.25)] transition duration-300 hover:-translate-y-0.5 hover:border-primary"
      >
        <h3 className="text-lg font-semibold text-skin-base">{item.title}</h3>
        <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-primary">{item.result}</p>
        <p className="mt-3 text-sm text-skin-muted">{item.detail}</p>
      </article>
    ))}
  </div>
);

export type { Project };
export default Projects;

