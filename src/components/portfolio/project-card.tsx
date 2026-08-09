"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import type { PortfolioContent } from "@/lib/portfolio";

type ProjectCardProps = { project: PortfolioContent["projects"]["entries"][number]; index: number; caseStudyLabel: string };

export function ProjectCard({ project, index, caseStudyLabel }: ProjectCardProps) {
  return <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: index * 0.08 }} className="group relative min-h-[430px] overflow-hidden rounded-3xl border border-white/10 bg-[#151515] p-6 sm:p-8"><div className={`absolute -right-24 -top-24 size-80 rounded-full bg-gradient-to-br ${project.gradientClass} opacity-50 blur-3xl transition-transform duration-700 group-hover:scale-125`} /><div className="relative flex h-full flex-col"><div className="flex items-center justify-between text-xs font-medium text-white/50"><span>{project.number}</span><span>{project.category.toUpperCase()}</span></div><div className="mt-auto"><h3 className="text-3xl font-medium tracking-[-0.05em] sm:text-4xl">{project.name}</h3><p className="mt-3 max-w-sm text-base leading-6 text-white/60">{project.description}</p><div className="mt-7 flex flex-wrap gap-2">{project.technologies.map((technology) => <span className="rounded-full bg-black/25 px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm" key={technology}>{technology}</span>)}</div><span className="mt-8 flex items-center gap-2 bg-gradient-to-r from-[#22c55e] to-[#38bdf8] bg-clip-text text-sm font-medium text-transparent">{caseStudyLabel} <ArrowUpRight className="size-4 text-[#38bdf8] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></span></div></div></motion.article>;
}
