import { Volume2, VolumeX } from 'lucide-react';
import { useState } from 'react';

export default function AmbientEffects() {
  const [sound, setSound] = useState(false);
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[8%] top-[22%] h-72 w-72 animate-pulse-glow rounded-full bg-cyan-neon/10 blur-3xl" />
        <div className="absolute bottom-[8%] right-[5%] h-96 w-96 animate-pulse-glow rounded-full bg-violet-electric/10 blur-3xl [animation-delay:1.2s]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:120px_120px] opacity-25" />
      </div>
      <button
        aria-label="Toggle cinematic sound"
        onClick={() => setSound((value) => !value)}
        className="fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-slate-950/70 text-cyan-neon backdrop-blur-xl transition hover:border-cyan-neon"
      >
        {sound ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </button>
    </>
  );
}
