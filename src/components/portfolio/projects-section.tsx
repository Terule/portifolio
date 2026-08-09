import { Code2 } from "lucide-react";

import { ProjectCard } from "@/components/portfolio/project-card";
import type { PortfolioContent } from "@/lib/portfolio";

type ProjectsSectionProps = { content: PortfolioContent };

export function ProjectsSection({ content }: ProjectsSectionProps) {
  return <section id="portfolio" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto max-w-7xl"><div className="mb-12 flex items-end justify-between"><div><p className="bg-gradient-to-r from-[#22c55e] to-[#38bdf8] bg-clip-text text-sm font-medium tracking-[0.16em] text-transparent">{content.projects.eyebrow}</p><h2 className="mt-3 text-4xl font-medium tracking-[-0.055em] sm:text-6xl">{content.projects.title[0]}<br />{content.projects.title[1]}</h2></div><Code2 className="mb-2 hidden size-8 text-[#38bdf8]/70 sm:block" /></div><div className="grid gap-5 lg:grid-cols-2">{content.projects.entries.map((project, index) => <ProjectCard key={project.number} project={project} index={index} caseStudyLabel={content.projects.caseStudy} />)}</div></div></section>;
}
