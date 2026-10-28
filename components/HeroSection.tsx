import { ArrowDown, ArrowRight } from "lucide-react";
import { images } from "@/data/content";
import { motion } from "framer-motion";

type HeroProps = { onBook: () => void };

export default function HeroSection({ onBook }: HeroProps) {
  return <motion.section id="top" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut" }} viewport={{ once: true }} className="relative flex min-h-[680px] items-end overflow-hidden border-b border-white/10 bg-[#141211] pb-16 pt-32 lg:min-h-[770px] lg:pb-20">
    <motion.div initial={{ scale: 1.04 }} animate={{ scale: 1 }} transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${images.hero})` }} />
    <div className="absolute inset-0 bg-gradient-to-r from-[#141211]/95 via-[#141211]/55 to-[#141211]/15" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#141211] via-transparent to-[#141211]/20" />
    <div className="relative mx-auto w-full max-w-[1440px] px-6 lg:px-10">
      <div className="max-w-2xl">
        <p className="mb-7 text-[10px] uppercase tracking-[0.3em] text-[#B89778]">Aurora&apos;s Atelier / Collection &apos;26</p>
        <h1 className="max-w-3xl break-words font-serif text-[clamp(2.5rem,7vw,6.5rem)] font-light uppercase leading-[0.88] tracking-[-0.04em] text-[#F5F2EB]">Bringing designs to life with elegance <em className="text-[#B89778]">&</em> functionality.</h1>
        <p className="mt-8 max-w-md text-sm leading-6 text-[#E6DDD2]/75">Bespoke interior styling, luxury room makeovers, and turn-key short-let setups crafted for refined living.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#collections" className="flex items-center gap-2 bg-[#B89778] px-5 py-3 text-[10px] uppercase tracking-[0.18em] text-[#1D1918] transition duration-300 ease-in-out hover:bg-[#d2b494] hover:shadow-[0_0_24px_rgba(184,151,120,0.22)]">Explore Projects <ArrowRight size={14} /></a>
          <button onClick={onBook} className="flex items-center gap-2 border border-white/35 px-5 py-3 text-[10px] uppercase tracking-[0.18em] text-[#F5F2EB] transition duration-300 ease-in-out hover:border-[#B89778] hover:text-[#B89778] hover:shadow-[0_0_24px_rgba(184,151,120,0.14)]">Discover Atelier <ArrowRight size={14} /></button>
        </div>
      </div>
      <div className="mt-16 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#F5F2EB]/65"><ArrowDown size={14} className="animate-bounce text-[#B89778]" /> Scroll to explore</div>
    </div>
  </motion.section>;
}
