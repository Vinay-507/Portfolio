import { motion } from 'framer-motion';

export default function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 ${className}`}>
      <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
        {eyebrow && <p className="mb-4 text-xs font-bold uppercase tracking-[0.45em] text-cyan-neon">{eyebrow}</p>}
        {title && <h2 className="max-w-4xl font-display text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h2>}
      </motion.div>
      {children}
    </section>
  );
}
