import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-[#020614]"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.65, ease: 'easeInOut' }}
        >
          <div className="relative">
            <motion.div className="absolute inset-0 rounded-full bg-cyan-neon blur-3xl" animate={{ opacity: [0.2, 0.7, 0.2], scale: [1, 1.25, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
            <motion.div className="relative rounded-full border border-cyan-neon/40 px-8 py-4 font-display text-sm font-bold tracking-[0.55em] text-cyan-neon" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
              VINAY OS
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
