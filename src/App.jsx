import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import About from '@/components/About';
import AmbientEffects from '@/components/AmbientEffects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import CustomCursor from '@/components/CustomCursor';
import Hero from '@/components/Hero';
import Journey from '@/components/Journey';
import Navbar from '@/components/Navbar';
import PageLoader from '@/components/PageLoader';
import Projects from '@/components/Projects';
import ScrollProgress from '@/components/ScrollProgress';
import SkillsGalaxy from '@/components/SkillsGalaxy';
import { useLenis } from '@/hooks/useLenis';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useLenis();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal-panel').forEach((panel) => {
        gsap.fromTo(panel, { y: 80, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: panel, start: 'top 82%' },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-body text-foreground selection:bg-cyan-neon selection:text-slate-950">
      <PageLoader />
      <ScrollProgress />
      <CustomCursor />
      <AmbientEffects />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <SkillsGalaxy />
        <Projects />
        <Certifications />
        <Journey />
        <Contact />
      </main>
      <footer className="relative z-10 border-t border-white/10 px-4 py-8 text-center text-sm text-slate-500">
        Built for Vinay Bokka. Full Stack Developer, Cybersecurity Enthusiast, AI Explorer.
      </footer>
    </div>
  );
}
