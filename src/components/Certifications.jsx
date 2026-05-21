import { Award } from 'lucide-react';
import { certifications } from '@/data/portfolio';
import Section from '@/components/Section';
import { GlassCard } from '@/components/ui/Card';

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="Verified Signals" title="Credentials across cybersecurity, AI, cloud, design, and industry systems.">
      <div className="mt-12 flex gap-5 overflow-x-auto pb-5 [scrollbar-width:none]">
        {certifications.map((cert, index) => (
          <GlassCard key={cert} className="min-w-[300px] p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-neon/40 hover:shadow-glow">
            <div className="mb-8 flex items-center justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-violet-electric/15 text-violet-200"><Award size={20} /></span>
              <span className="font-display text-4xl font-black text-white/10">0{index + 1}</span>
            </div>
            <h3 className="font-display text-xl font-bold leading-8 text-white">{cert}</h3>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
