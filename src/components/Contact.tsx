import type { ReactNode } from 'react';
import Button from './ui/Button';

type ContactProps = {
  email: string;
  linkedin: string;
};

const Contact = ({ email, linkedin }: ContactProps) => (
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
    <form
      action={`mailto:${email}`}
      method="POST"
      encType="text/plain"
      className="rounded-2xl border border-skin-muted bg-skin-card p-6 shadow-[0_6px_30px_-10px_rgba(2,6,23,.25)]"
    >
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name">
          <input
            id="name"
            name="name"
            type="text"
            required
            className="h-11 rounded-xl border border-skin-muted bg-transparent px-3 text-sm text-skin-base transition duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </Field>
        <Field label="Email">
          <input
            id="email"
            name="email"
            type="email"
            required
            className="h-11 rounded-xl border border-skin-muted bg-transparent px-3 text-sm text-skin-base transition duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </Field>
        <Field label="Message" className="md:col-span-2">
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="rounded-xl border border-skin-muted bg-transparent px-3 py-3 text-sm text-skin-base transition duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </Field>
      </div>
      <Button type="submit" className="mt-6">
        Send Message
      </Button>
    </form>
    <aside className="flex flex-col gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-sm text-skin-muted shadow-[0_6px_30px_-10px_rgba(2,6,23,.25)]">
      <h3 className="text-base font-semibold text-skin-base">Prefer a direct line?</h3>
      <p>
        Email{' '}
        <a
          href={`mailto:${email}`}
          className="font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {email}
        </a>{' '}
        or connect on LinkedIn for audits, launch ramps, or fractional support.
      </p>
      <Button as="a" href={linkedin} variant="outline" className="w-fit" target="_blank" rel="noopener noreferrer">
        LinkedIn Profile
      </Button>
    </aside>
  </div>
);

type FieldProps = {
  label: string;
  children: ReactNode;
  className?: string;
};

const Field = ({ label, children, className }: FieldProps) => (
  <label className={`flex flex-col gap-2 text-sm font-medium text-skin-base ${className ?? ''}`}>
    {label}
    {children}
  </label>
);

export default Contact;
