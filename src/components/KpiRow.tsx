import { useEffect, useMemo, useState } from 'react';

type KPI = {
  label: string;
  value: string;
};

type KpiRowProps = {
  kpis: KPI[];
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const parseValue = (value: string) => {
  const match = value.match(/^([^\d-+]*)(-?\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return {
      prefix: '',
      number: 0,
      decimals: 0,
      suffix: '',
      raw: value,
    };
  }

  const [, prefixPart, numberPart, suffixPart] = match;
  const decimals = numberPart.includes('.') ? numberPart.split('.')[1]?.length ?? 0 : 0;

  return {
    prefix: prefixPart ?? '',
    number: Number.parseFloat(numberPart),
    decimals,
    suffix: suffixPart ?? '',
    raw: value,
  };
};

const usePrefersReducedMotion = () => {
  const [prefers, setPrefers] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return;
    }
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefers(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => setPrefers(event.matches);

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handler);
    } else {
      mediaQuery.addListener(handler);
    }

    return () => {
      if (typeof mediaQuery.removeEventListener === 'function') {
        mediaQuery.removeEventListener('change', handler);
      } else {
        mediaQuery.removeListener(handler);
      }
    };
  }, []);

  return prefers;
};

const KpiRow = ({ kpis }: KpiRowProps) => {
  const reducesMotion = usePrefersReducedMotion();
  const parsed = useMemo(() => kpis.map((item) => parseValue(item.value)), [kpis]);
  const [displayValues, setDisplayValues] = useState<string[]>(() => parsed.map((item) => item.raw));

  useEffect(() => {
    if (reducesMotion) {
      setDisplayValues(parsed.map((item) => item.raw));
      return;
    }

    setDisplayValues(parsed.map((item) => `${item.prefix}0${item.suffix}`));

    const duration = 1200;
    const intervalDelay = 24;
    const totalSteps = Math.ceil(duration / intervalDelay);

    const timers = parsed.map((item, index) => {
      let frame = 0;

      const timerId = window.setInterval(() => {
        frame += 1;
        const progress = Math.min(frame / totalSteps, 1);
        const eased = easeOutCubic(progress);
        const nextValue = item.number * eased;
        const formatted = `${item.prefix}${nextValue.toFixed(item.decimals)}${item.suffix}`;

        setDisplayValues((current) => {
          const copy = [...current];
          copy[index] = progress >= 1 ? item.raw : formatted;
          return copy;
        });

        if (progress >= 1) {
          window.clearInterval(timerId);
        }
      }, intervalDelay);

      return timerId;
    });

    return () => {
      timers.forEach((timer) => window.clearInterval(timer));
    };
  }, [parsed, reducesMotion]);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-4">
      {kpis.map((kpi, index) => (
        <article
          key={kpi.label}
          className="flex min-h-[110px] flex-col justify-between rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-sky-400 dark:border-slate-800 dark:bg-slate-900/60"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">{kpi.label}</p>
          <p className="mt-4 text-3xl font-semibold leading-tight text-slate-900 tabular-nums dark:text-slate-100">
            {displayValues[index] ?? kpi.value}
          </p>
        </article>
      ))}
    </div>
  );
};

export default KpiRow;
