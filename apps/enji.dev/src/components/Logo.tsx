import clsx from 'clsx';

interface LogoProps {
  active?: boolean;
}

function Logo({ active = false }: LogoProps) {
  return (
    <div className={clsx('flex items-center gap-1.5 font-[1000] leading-none')}>
      <div
        className={clsx(
          'border-box flex h-8 w-8 items-center justify-center rounded-xl border-2',
          'sm:h-6 sm:w-6 sm:rounded-lg',
          [
            active
              ? 'border-accent-600 bg-accent-600 dark:border-accent-500 dark:bg-accent-500'
              : 'border-accent-600 dark:border-accent-500',
          ]
        )}
      >
        <span
          className={clsx('text-2xl', [
            active ? 'text-white' : 'text-accent-600 dark:text-accent-400',
          ])}
          style={{ lineHeight: '0.8', marginTop: '-10px' }} // Menjaga tinggi baris agar simbol lebih terpusat
        >
          ;
        </span>
      </div>
      <div className={clsx('-mt-1 hidden text-xl', 'sm:block')}>
        <span className={clsx('text-slate-900', 'dark:text-slate-200')}>
          ilhamarifin
        </span>
        <span className={clsx('text-accent-600', 'dark:text-accent-500')}>
          com
        </span>
      </div>
    </div>
  );
}

export default Logo;
