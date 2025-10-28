import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsAnchor = CommonProps & ComponentPropsWithoutRef<'a'> & { as: 'a' };
type ButtonAsButton = CommonProps & ComponentPropsWithoutRef<'button'> & { as?: 'button' };

type ButtonProps = ButtonAsAnchor | ButtonAsButton;

const cn = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(' ');

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-[color:var(--primary-foreground)] shadow-lift hover:bg-primary/90',
  outline: 'border border-primary text-primary hover:bg-primary/10',
  ghost: 'text-skin-base hover:bg-skin-muted/70',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm sm:text-base',
  lg: 'h-12 px-6 text-base',
};

const Button = (props: ButtonProps) => {
  const { as = 'button', variant = 'primary', size = 'md', className, children, ...rest } = props;

  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-transform transition-colors duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60';

  const combined = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (as === 'a') {
    const anchorProps = rest as ComponentPropsWithoutRef<'a'>;
    return (
      <a className={combined} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { type, ...buttonRest } = rest as ComponentPropsWithoutRef<'button'>;
  return (
    <button className={combined} type={type ?? 'button'} {...buttonRest}>
      {children}
    </button>
  );
};

export type { ButtonProps, ButtonSize, ButtonVariant };
export default Button;
