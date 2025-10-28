type BadgeProps = {
  label: string;
};

const Badge = ({ label }: BadgeProps) => (
  <span className="inline-flex items-center justify-center rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600 transition duration-200 hover:border-sky-400 hover:text-sky-500 animate-slide-up motion-reduce:animate-none dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300">
    {label}
  </span>
);

export default Badge;
