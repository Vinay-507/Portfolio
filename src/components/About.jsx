import { motion } from 'framer-motion';
import { highlights, profile, stats } from '@/data/portfolio';
import Section from '@/components/Section';
import { GlassCard } from '@/components/ui/Card';

export default function About() {
  return (
    <Section id="about" eyebrow="Identity Protocol" title="Computer Science engineer building secure, intelligent digital systems.">
      <div className="mt-12 grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div whileHover={{ rotateX: 4, rotateY: -6, y: -8 }} className="perspective-1000">
          <GlassCard className="relative overflow-hidden p-8">
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-cyan-neon/20 blur-3xl" />
            <div className="mb-8 aspect-square rounded-lg border border-cyan-neon/20 bg-[radial-gradient(circle_at_45%_35%,rgba(24,247,255,.32),transparent_30%),linear-gradient(135deg,rgba(155,92,255,.22),rgba(8,16,34,.85))] p-6">
              <div className="flex h-full items-center justify-center rounded-lg border border-white/10 bg-black/20 font-display text-8xl font-black text-white shadow-inner">
                VB
              </div>
            </div>
            <h3 className="font-display text-3xl font-black text-white">{profile.name}</h3>
            <p className="mt-3 text-cyan-neon">{profile.location}</p>
            <p className="mt-5 leading-7 text-slate-300">
              Vinay completed B.Tech in Computer Science Engineering for the academic period 2022-2026 at Usha Rama College of Engineering and Technology, with a CGPA of 8.77.
            </p>
          </GlassCard>
        </motion.div>
        <div>
          <p className="text-lg leading-8 text-slate-300">
            Vinay is passionate about full stack development, artificial intelligence, cybersecurity, networking, cloud computing, and future technologies. He enjoys building secure, intelligent, and impactful digital experiences that connect strong engineering foundations with creative product thinking.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <GlassCard key={stat.label} className="p-5 text-center">
                <div className="font-display text-4xl font-black text-cyan-neon">{stat.value}{stat.suffix}</div>
                <div className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map(({ label, value, icon: Icon }) => (
              <GlassCard key={label} className="flex items-start gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-cyan-neon/10 text-cyan-neon"><Icon size={19} /></span>
                <div>
                  <h4 className="font-display font-bold text-white">{label}</h4>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{value}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
