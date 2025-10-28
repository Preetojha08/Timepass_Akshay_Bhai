import { useId } from 'react';

type ContactProps = {
  email: string;
  linkedin: string;
};

const Contact = ({ email, linkedin }: ContactProps) => {
  const nameId = useId();
  const emailId = useId();
  const msgId = useId();

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-8">
      <div className="md:col-span-3">
        <div
          className="rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-sm backdrop-blur animate-slide-up motion-reduce:animate-none dark:border-slate-800 dark:bg-slate-900/60"
          style={{ animationDelay: '0.05s' }}
        >
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Let's Collaborate</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Reach out for launch plans, audits, or steady operations during growth.
          </p>

          <form className="mt-6 space-y-4" action={`mailto:${email}`} method="post" encType="text/plain">
            <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor={nameId} className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Name
                </label>
                <input id={nameId} name="name" type="text" className="input-base mt-1" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor={emailId} className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email
                </label>
                <input id={emailId} name="email" type="email" className="input-base mt-1" placeholder="you@email.com" />
              </div>
            </div>

            <div>
              <label htmlFor={msgId} className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Message
              </label>
              <textarea
                id={msgId}
                name="message"
                className="input-base textarea-lg mt-1"
                placeholder="How can Akshay help?"
              />
            </div>

            <div className="pt-1">
              <button
                type="submit"
                className="inline-flex items-center rounded-xl bg-sky-500 px-5 py-2.5 font-medium text-white shadow-sm transition hover:bg-sky-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <aside className="md:col-span-2">
        <div className="flex h-full flex-col rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-sm backdrop-blur animate-slide-up motion-reduce:animate-none dark:border-slate-800 dark:bg-slate-900/60"
          style={{ animationDelay: '0.15s' }}>
          <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">Prefer a direct line?</h4>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Email{' '}
            <a className="underline decoration-slate-400 transition hover:decoration-sky-400" href={`mailto:${email}`}>
              {email}
            </a>{' '}
            or connect for fractional ops support.
          </p>
          <div className="mt-4">
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-xl border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-sky-400 transition hover:bg-sky-500/15"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="mt-auto" />
        </div>
      </aside>
    </div>
  );
};

export default Contact;
