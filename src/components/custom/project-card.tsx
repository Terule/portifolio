import type { IconType } from 'react-icons'

import { StackProjectBadge } from './stack-project-badge'

import { CarouselItem } from '../ui/carousel'

interface ProjectCardProps {
  title: string
  description: string
  techs: { name: string; icon: IconType }[]
}

function ProjectCard({ title, description, techs }: ProjectCardProps) {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/2">
      <div
        className="h-full flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/40 p-6 
      hover:border-cyan-500/40 transition-all group select-none"
      >
        <div>
          <h3 className="font-roboto text-lg md:text-xl font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed">
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
