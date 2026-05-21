import { cn } from '@/lib/utils';

export function GlassCard({ className, children, ...props }) {
  return (
    <div
      className={cn(
        'rounded-lg border border-white/10 bg-panel backdrop-blur-2xl shadow-[0_24px_100px_rgba(0,0,0,.35)]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
