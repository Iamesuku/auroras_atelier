"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValueProps from "@/components/ValueProps";
import PortfolioGrid from "@/components/PortfolioGrid";
import FeaturedProject from "@/components/FeaturedProject";
import MaterialsGrid from "@/components/MaterialsGrid";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  return <main className="overflow-hidden bg-[#141211] text-[#F5F2EB]"><Navbar onBook={() => setBookingOpen(true)} /><HeroSection onBook={() => setBookingOpen(true)} /><ValueProps /><PortfolioGrid /><FeaturedProject onBook={() => setBookingOpen(true)} /><MaterialsGrid /><footer className="border-t border-white/10 bg-[#141211] px-6 py-8 lg:px-10"><div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 sm:flex-row sm:items-center"><p className="font-serif text-sm tracking-[0.18em] text-[#F5F2EB]">AURORA&apos;S ATELIER</p><p className="text-[10px] uppercase tracking-[0.18em] text-[#A99F95]">Interiors for the way you want to live.</p><p className="text-[10px] uppercase tracking-[0.14em] text-[#A99F95]">© 2026 Aurora&apos;s Atelier</p></div></footer><BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} /></main>;
}
