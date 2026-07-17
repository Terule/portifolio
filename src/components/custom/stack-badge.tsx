import type { IconType } from 'react-icons'

import { Badge } from '../ui/badge'

interface StackBadgeProps {
  name: string
  icon: IconType
}

function StackBadge({ name, icon: Icon }: StackBadgeProps) {
  return (
    <Badge asChild>
      <div className="group flex cursor-default items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/70 px-4 py-2 text-xs font-medium text-slate-300 shadow-sm shadow-slate-950/50 transition-all hover:-translate-y-0.5 hover:border-cyan-500/30 hover:bg-slate-900/80 md:text-sm">
        <Icon className="text-base text-slate-500 transition-colors duration-300 group-hover:text-cyan-400 md:text-lg" />
        {name}
      </div>
    </Badge>
  )
}
export default StackBadge
