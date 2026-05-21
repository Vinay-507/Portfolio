import { motion } from 'framer-motion';
import { timeline } from '@/data/portfolio';
import Section from '@/components/Section';

export default function Journey() {
  return (
    <Section id="journey" eyebrow="Experience Timeline" title="A technical journey shaped by internships, leadership, and community impact.">
      <div className="relative mt-14">
        <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-neon via-violet-electric to-transparent md:left-1/2" />
        {timeline.map(({ title, meta, body, icon: Icon }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, x: index % 2 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className={`relative mb-10 grid gap-6 pl-16 md:grid-cols-2 md:pl-0 ${index % 2 ? 'md:[&>div]:col-start-2' : ''}`}
          >
            <span className="absolute left-0 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-cyan-neon bg-slate-950 text-cyan-neon shadow-glow md:left-1/2 md:-translate-x-1/2"><Icon size={18} /></span>
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-neon">{meta}</p>
              <h3 className="mt-3 font-display text-2xl font-black text-white">{title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
