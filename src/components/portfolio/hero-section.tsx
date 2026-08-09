"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";

import { HeroScene } from "@/components/hero-scene";
import { ProfilePhoto } from "@/components/portfolio/profile-photo";
import { identity, type PortfolioContent } from "@/lib/portfolio";

const revealTransition = { duration: 0.8 };
type HeroSectionProps = { content: PortfolioContent; header: ReactNode };

export function HeroSection({ content, header }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen px-5 pb-8 pt-5 sm:px-8 lg:px-12">
      <div className="noise pointer-events-none absolute inset-0 opacity-30" />
      {header}
      <div id="top" className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl flex-col justify-end pt-24">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-6 flex items-center gap-3 text-xs font-medium tracking-[0.16em] text-[#22c55e]"><span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-[#38bdf8] opacity-75" /><span className="relative inline-flex size-2 rounded-full bg-[#22c55e]" /></span>{content.hero.availability}</motion.div>
        <h1 className="max-w-6xl text-[14vw] font-semibold leading-[0.82] tracking-[-0.085em] sm:text-[12vw] lg:text-[9.8rem] xl:text-[11rem]"><motion.span initial={{ opacity: 0, y: 42 }} animate={{ opacity: 1, y: 0 }} transition={revealTransition} className="block">{content.hero.headline[0]}</motion.span><motion.span initial={{ opacity: 0, y: 42 }} animate={{ opacity: 1, y: 0 }} transition={{ ...revealTransition, delay: 0.1 }} className="block bg-gradient-to-r from-[#22c55e] via-[#14b8a6] to-[#38bdf8] bg-clip-text text-transparent">{content.hero.headline[1]}</motion.span></h1>
        <div className="mt-10 flex flex-col justify-between gap-8 border-t border-white/15 pt-5 sm:flex-row sm:items-end"><p className="max-w-md text-base leading-7 text-white/60 sm:text-lg">{content.hero.introduction}</p><a href="#portfolio" className="group flex w-fit items-center gap-3 text-sm font-medium"><span>{content.hero.explore}</span><span className="flex size-10 items-center justify-center rounded-full border border-white/20 transition-all group-hover:border-[#38bdf8] group-hover:bg-gradient-to-br group-hover:from-[#22c55e] group-hover:to-[#38bdf8] group-hover:text-[#061a15]"><ArrowDownRight className="size-4" /></span></a></div>
      </div>
      <div className="absolute right-0 top-16 z-20 h-[58vh] w-full max-w-3xl opacity-70 sm:right-8"><HeroScene /></div>
      <div className="absolute right-5 top-24 z-30 sm:right-10 lg:right-16"><ProfilePhoto name={identity.alias} label={content.hero.photoLabel} /></div>
    </section>
  );
}
