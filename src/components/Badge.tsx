type BadgeProps = {
  label: string;
};

const Badge = ({ label }: BadgeProps) => (
  <span className="inline-flex items-center justify-center rounded-full border border-skin-muted bg-skin-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-skin-muted transition duration-200 hover:border-primary hover:text-primary">
    {label}
  </span>
);

export default Badge;

