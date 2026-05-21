import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';
import Section from '@/components/Section';

export default function SkillsGalaxy() {
  return (
    <Section id="skills" eyebrow="Orbiting Stack" title="A living skills galaxy for web, AI, cloud, and security.">
      <div className="relative mt-16 min-h-[620px] overflow-hidden rounded-lg border border-white/10 bg-[radial-gradient(circle_at_center,rgba(24,247,255,.12),transparent_34%),rgba(255,255,255,.03)]">
        <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-neon/40 bg-cyan-neon/10 shadow-glow" />
        <div className="absolute left-1/2 top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-slate-950 font-display text-xl font-black text-white">
          CORE
        </div>
        {[260, 380, 500].map((size) => (
          <div key={size} className="absolute left-1/2 top-1/2 rounded-full border border-cyan-neon/10" style={{ width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 }} />
        ))}
        {skills.map((skill, index) => {
          const ring = index % 3;
          const radius = [130, 190, 250][ring];
          const angle = (index / skills.length) * Math.PI * 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <motion.div
              key={skill}
              className="absolute left-1/2 top-1/2"
              style={{ x, y }}
              animate={{ rotate: 360 }}
              transition={{ duration: 18 + ring * 8, repeat: Infinity, ease: 'linear' }}
            >
              <motion.div
                whileHover={{ scale: 1.16, y: -6 }}
                className="grid min-h-14 min-w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-cyan-neon/30 bg-slate-950/85 px-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-cyan-50 shadow-glow backdrop-blur"
              >
                {skill}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
