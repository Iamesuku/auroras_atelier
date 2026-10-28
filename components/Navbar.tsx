"use client";

import { Menu, Search, Heart, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

type NavbarProps = { onBook: () => void };

export default function Navbar({ onBook }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const links = ["Collections", "Short-Let Setups", "Room Makeovers", "Bedding & Decor", "Design Journal"];
  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-white/10 bg-[#141211]/55 px-6 py-5 backdrop-blur-md lg:px-10">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between">
        <a href="#top" className="z-10 flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#B89778]/70 text-[#B89778]">✦</span>
          <span className="font-serif text-sm tracking-[0.18em] text-[#F5F2EB]">AURORA&apos;S ATELIER</span>
        </a>
        <nav className="hidden items-center gap-6 xl:flex">
          {links.map((link) => <a key={link} href="#collections" className="text-[10px] uppercase tracking-[0.16em] text-[#D9D0C5]/80 transition-colors hover:text-[#F5F2EB]">{link}</a>)}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <button aria-label="Search" className="text-[#F5F2EB]/80 transition hover:text-[#B89778]"><Search size={16} strokeWidth={1.4} /></button>
          <button aria-label="Wishlist" className="text-[#F5F2EB]/80 transition hover:text-[#B89778]"><Heart size={16} strokeWidth={1.4} /></button>
          <button onClick={onBook} className="flex items-center gap-2 bg-[#B89778] px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#1D1918] transition duration-300 ease-in-out hover:bg-[#d2b494] hover:shadow-[0_0_24px_rgba(184,151,120,0.22)]">Book Consultation <ArrowUpRight size={13} /></button>
        </div>
        <button aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="z-10 text-[#F5F2EB] lg:hidden">{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
      {open && <div className="absolute inset-x-0 top-full border-b border-white/10 bg-[#1D1918] px-6 py-7 lg:hidden">
        <nav className="flex flex-col gap-5">{links.map((link) => <a key={link} href="#collections" onClick={() => setOpen(false)} className="text-xs uppercase tracking-[0.18em] text-[#F5F2EB]">{link}</a>)}</nav>
        <button onClick={() => { setOpen(false); onBook(); }} className="mt-7 flex w-full items-center justify-center gap-2 bg-[#B89778] px-4 py-3 text-[10px] uppercase tracking-[0.16em] text-[#1D1918] transition duration-300 ease-in-out hover:bg-[#d2b494] hover:shadow-[0_0_24px_rgba(184,151,120,0.22)]">Book Consultation <ArrowUpRight size={13} /></button>
      </div>}
    </header>
  );
}
