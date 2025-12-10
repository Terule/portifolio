import type { IconType } from 'react-icons'

import { Badge } from '../ui/badge'

interface StackBadgeProps {
  name: string
  icon: IconType
}

function StackBadge({ name, icon: Icon }: StackBadgeProps) {
  return (
    <Badge asChild>
      <div
        className="group flex items-center gap-2 rounded-full bg-slate-900 border border-slate-800 px-4 py-2 
      text-xs md:text-sm font-medium text-slate-300 transition-all hover:-translate-y-0.5 hover:bg-slate-800 
      hover:border-slate-700 hover:shadow-lg cursor-default"
      >
        <Icon className="text-base md:text-lg text-slate-500 group-hover:text-cyan-500 transition-colors duration-300" />
        {name}
      </div>
    </Badge>
  )
}
export default StackBadge
