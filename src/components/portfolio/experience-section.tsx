import { BriefcaseBusiness, ChevronDown, MapPin } from "lucide-react";

import type { PortfolioContent } from "@/lib/portfolio";

type ExperienceSectionProps = { content: PortfolioContent };

export function ExperienceSection({ content }: ExperienceSectionProps) {
  return (
    <section id="experience" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1fr_1.45fr]">
          <p className="bg-gradient-to-r from-[#22c55e] to-[#38bdf8] bg-clip-text text-sm font-medium tracking-[0.16em] text-transparent">{content.experience.eyebrow}</p>
          <div><h2 className="max-w-3xl text-3xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-5xl">{content.experience.title}</h2><p className="mt-6 max-w-2xl text-base leading-7 text-white/60">{content.experience.introduction}</p></div>
        </div>
        <ol className="mt-12 border-l border-[#38bdf8]/40 pl-6 sm:pl-10">
          {content.experience.entries.map((entry, index) => (
            <li key={entry.company} className="relative pb-5 last:pb-0">
              <span className="absolute -left-[31px] top-6 flex size-3 items-center justify-center rounded-full border border-[#38bdf8] bg-[#0a0a0a] sm:-left-[47px]"><span className="size-1 rounded-full bg-[#22c55e]" /></span>
              <details className="group rounded-2xl border border-white/10 bg-white/[0.03] open:bg-white/[0.05]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 [&::-webkit-details-marker]:hidden">
                  <div><div className="flex items-center gap-2 text-xs font-medium text-[#22c55e]"><BriefcaseBusiness className="size-3.5" />{entry.duration}</div><h3 className="mt-2 text-xl font-medium tracking-[-0.04em] sm:text-2xl">{entry.company}</h3></div>
                  <ChevronDown className="size-5 shrink-0 text-[#38bdf8] transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="flex flex-col gap-4 border-t border-white/10 p-5 pt-4">
                  {entry.roles.map((role) => <article key={`${entry.company}-${role.title}`}><p className="text-xs font-semibold tracking-[0.14em] text-white/45">{content.experience.rolesLabel}</p><h4 className="mt-1 text-lg font-medium">{role.title}</h4><p className="mt-1 text-sm text-[#38bdf8]">{role.period}</p>{role.location ? <p className="mt-2 flex items-center gap-1.5 text-xs text-white/45"><MapPin className="size-3" />{role.location}</p> : null}{role.highlights ? <ul className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4 text-sm leading-6 text-white/60">{role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul> : null}</article>)}
                </div>
              </details>
              {index < content.experience.entries.length - 1 ? <div className="mt-5 border-t border-white/10" /> : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
