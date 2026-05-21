import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { lazy, Suspense } from 'react';
import { profile } from '@/data/portfolio';
import { Button } from '@/components/ui/Button';

const HeroScene = lazy(() => import('@/components/three/HeroScene'));

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:54px_54px] opacity-35 [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--cursor-x,50%)_var(--cursor-y,35%),rgba(24,247,255,.18),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(155,92,255,.22),transparent_28%),linear-gradient(180deg,rgba(3,7,20,.25),#030714_92%)]" />
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <Suspense fallback={<div className="h-full w-full bg-[#030714]" />}>
          <HeroScene />
        </Suspense>
      </motion.div>
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 pt-24 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 42 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.1 }} className="max-w-5xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-neon/30 bg-cyan-neon/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.32em] text-cyan-neon shadow-glow">
            <Sparkles size={14} /> {profile.brand}
          </div>
          <h1 className="font-display text-[clamp(4.5rem,16vw,13.5rem)] font-black leading-[0.78] tracking-tight text-white">
            <span className="block text-transparent [-webkit-text-stroke:1px_rgba(24,247,255,.62)]">BOKKA</span>
            <span className="block bg-gradient-to-r from-white via-cyan-neon to-violet-electric bg-clip-text text-transparent drop-shadow-[0_0_32px_rgba(24,247,255,.35)]">
              {profile.heroName}
            </span>
          </h1>
          <p className="mt-7 min-h-8 max-w-3xl font-display text-xl font-semibold text-cyan-50 sm:text-2xl">
            <span className="typing">{profile.tagline}</span>
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{profile.intro}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button as="a" href="#projects">Explore Work</Button>
            <Button as="a" href={profile.resume} download variant="ghost">
              <Download size={16} /> Resume
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-cyan-neon">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.6, repeat: Infinity }} className="flex flex-col items-center gap-2 text-xs font-bold uppercase tracking-[0.28em]">
          Scroll <ArrowDown size={18} />
        </motion.div>
      </div>
      <div className="fixed bottom-5 left-1/2 z-50 hidden -translate-x-1/2 rounded-full border border-white/10 bg-slate-950/55 p-2 backdrop-blur-xl md:flex">
        {[
          { icon: Github, href: profile.socials[0].href, label: 'GitHub' },
          { icon: Linkedin, href: profile.socials[1].href, label: 'LinkedIn' },
          { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
        ].map(({ icon: Icon, href, label }) => (
          <a key={label} href={href} aria-label={label} className="grid h-11 w-11 place-items-center rounded-full text-cyan-50 transition hover:bg-cyan-neon hover:text-slate-950">
            <Icon size={18} />
          </a>
        ))}
      </div>
    </section>
  );
}
