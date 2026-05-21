import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 260, damping: 28 });
  const springY = useSpring(y, { stiffness: 260, damping: 28 });

  useEffect(() => {
    const move = (event) => {
      x.set(event.clientX - 16);
      y.set(event.clientY - 16);
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, [x, y]);

  return <motion.div className="pointer-events-none fixed z-[90] hidden h-8 w-8 rounded-full border border-cyan-neon/70 mix-blend-screen shadow-glow md:block" style={{ x: springX, y: springY }} />;
}
