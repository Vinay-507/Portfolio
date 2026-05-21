import { AnimatePresence, motion } from 'framer-motion';
import { Check, Copy, Mail, Radio } from 'lucide-react';
import { useState } from 'react';
import { profile } from '@/data/portfolio';
import { copyToClipboard } from '@/lib/utils';
import Section from '@/components/Section';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/Card';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await copyToClipboard(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  return (
    <Section id="contact" eyebrow="Transmission Open" title="Let’s build secure, intelligent, high-impact digital products.">
      <div className="mt-12 grid gap-7 lg:grid-cols-[1fr_0.8fr]">
        <GlassCard className="p-6 sm:p-8">
          <form className="grid gap-5" action={`mailto:${profile.email}`} method="post" encType="text/plain">
            {['Name', 'Email', 'Project Signal'].map((label) => (
              <label key={label} className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.24em] text-cyan-neon">{label}</span>
                <input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-neon focus:shadow-glow" placeholder={label === 'Project Signal' ? 'AI platform, security dashboard, full stack app...' : label} />
              </label>
            ))}
            <label className="block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.24em] text-cyan-neon">Message</span>
              <textarea rows="6" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-neon focus:shadow-glow" placeholder="Tell me what you want to create." />
            </label>
            <Button className="w-full sm:w-auto">Send Message</Button>
          </form>
        </GlassCard>
        <div className="space-y-5">
          <GlassCard className="p-6">
            <div className="flex items-center gap-3 text-emerald-300">
              <Radio size={18} className="animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-[0.22em]">Available for opportunities</span>
            </div>
            <p className="mt-5 text-slate-300">Open to full stack, AI, cybersecurity, cloud, and creative technology roles.</p>
          </GlassCard>
          <GlassCard className="p-6">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-neon">Direct Email</p>
            <button onClick={copyEmail} className="mt-4 flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4 text-left text-white transition hover:border-cyan-neon">
              <span>{profile.email}</span>
              <AnimatePresence mode="wait">
                {copied ? <motion.span key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}><Check size={18} /></motion.span> : <Copy size={18} />}
              </AnimatePresence>
            </button>
          </GlassCard>
          <div className="grid grid-cols-2 gap-4">
            {profile.socials.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} className="rounded-lg border border-white/10 bg-white/[0.04] p-5 text-white transition hover:-translate-y-1 hover:border-cyan-neon hover:text-cyan-neon">
                <Icon size={22} />
                <span className="mt-4 block font-display font-bold">{label}</span>
              </a>
            ))}
          </div>
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-cyan-neon"><Mail size={18} /> {profile.phone}</a>
        </div>
      </div>
    </Section>
  );
}
