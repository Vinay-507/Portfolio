import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/data/portfolio';
import Section from '@/components/Section';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/Card';

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Build Archive" title="Premium interactive systems across AI, healthcare, cloud, and automation.">
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {projects.map(({ title, description, stack, features, icon: Icon, period }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            whileHover={{ y: -10, rotateX: 3, rotateY: -3 }}
          >
            <GlassCard className="group relative h-full overflow-hidden p-6">
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-neon/20 blur-3xl" />
                <div className="absolute -bottom-24 left-8 h-60 w-60 rounded-full bg-violet-electric/20 blur-3xl" />
              </div>
              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-lg border border-cyan-neon/30 bg-cyan-neon/10 text-cyan-neon"><Icon size={23} /></span>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{period}</span>
                </div>
                <div className="mb-5 aspect-video overflow-hidden rounded-lg border border-white/10 bg-cyber-grid bg-[length:28px_28px]">
                  <div className="flex h-full items-end bg-[radial-gradient(circle_at_40%_30%,rgba(24,247,255,.25),transparent_35%),linear-gradient(135deg,rgba(155,92,255,.24),transparent)] p-5">
                    <p className="font-display text-2xl font-black text-white">{title}</p>
                  </div>
                </div>
                <h3 className="font-display text-2xl font-black text-white">{title}</h3>
                <p className="mt-3 min-h-20 leading-7 text-slate-300">{description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-cyan-50">{tech}</span>
                  ))}
                </div>
                <ul className="mt-5 space-y-2 text-sm text-slate-400">
                  {features.map((feature) => <li key={feature}>+ {feature}</li>)}
                </ul>
                <div className="mt-6 flex gap-3">
                  <Button as="a" href="https://github.com/Vinay-507" variant="ghost" className="px-4 py-2 text-[11px]"><Github size={14} /> GitHub</Button>
                  <Button as="a" href="#contact" variant="violet" className="px-4 py-2 text-[11px]"><ExternalLink size={14} /> Demo</Button>
                </div>
              </div>
            </GlassCard>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
