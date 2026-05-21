import { cn } from '@/lib/utils';

export function Button({ as: Comp = 'button', className, variant = 'primary', ...props }) {
  const variants = {
    primary:
      'bg-cyan-neon text-slate-950 shadow-glow hover:bg-white hover:shadow-[0_0_44px_rgba(24,247,255,.55)]',
    ghost:
      'border border-cyan-neon/35 bg-white/5 text-cyan-50 hover:border-cyan-neon hover:bg-cyan-neon/10',
    violet:
      'bg-violet-electric text-white shadow-violet hover:bg-cyan-neon hover:text-slate-950',
  };

  return (
    <Comp
      className={cn(
        'group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold uppercase tracking-[0.24em] transition duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-neon focus:ring-offset-2 focus:ring-offset-background',
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
