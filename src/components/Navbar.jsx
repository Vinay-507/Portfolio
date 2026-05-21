import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const nav = ['About', 'Skills', 'Projects', 'Certifications', 'Journey', 'Contact'];

export default function Navbar() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 120], ['rgba(3,7,20,0)', 'rgba(3,7,20,.78)']);
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('light-mode', light);
  }, [light]);

  return (
    <motion.header style={{ backgroundColor: bg }} className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-3 font-display text-sm font-black tracking-[0.28em] text-white">
          <span className="grid h-10 w-10 place-items-center rounded-lg border border-cyan-neon/40 bg-cyan-neon/10 text-cyan-neon shadow-glow">
            <Cpu size={18} />
          </span>
          VINAY
        </a>
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 lg:flex">
          {nav.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-50/70 transition hover:bg-cyan-neon/10 hover:text-cyan-neon">
              {item}
            </a>
          ))}
        </div>
        <button
          aria-label="Toggle theme accent"
          onClick={() => setLight((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-cyan-neon transition hover:border-cyan-neon"
        >
          {light ? <Sun size={17} /> : <Moon size={17} />}
        </button>
      </nav>
    </motion.header>
  );
}
