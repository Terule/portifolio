import type { IconType } from 'react-icons'

import { StackProjectBadge } from './stack-project-badge'

import { CarouselItem } from '../ui/carousel'

interface ProjectCardProps {
  title: string
  description: string
  status?: string
  techs: { name: string; icon: IconType }[]
}

function ProjectCard({ title, description, status, techs }: ProjectCardProps) {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/2">
      <div className="group flex h-full flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/50 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-cyan-500/40 select-none">
        <div>
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-roboto text-lg font-bold text-slate-100 transition-colors group-hover:text-cyan-300 md:text-xl">
              {title}
            </h3>
            {status ? (
              <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-cyan-300 uppercase">
                {status}
              </span>
            ) : null}
          </div>

          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            {description}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {techs.map((t) => (
            <StackProjectBadge key={t.name}>
              <t.icon className="text-cyan-500/70" /> {t.name}
            </StackProjectBadge>
          ))}
        </div>
      </div>
    </CarouselItem>
  )
}
export default ProjectCard
