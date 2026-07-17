import { Badge } from '@/components/ui/badge'

export function StackProjectBadge({ children }: React.PropsWithChildren) {
  return (
    <Badge asChild>
      <span className="inline-flex items-center gap-1 rounded-full border border-slate-700/70 bg-slate-950/70 px-2.5 py-1 text-[10px] font-mono text-slate-400 md:text-xs">
        {children}
      </span>
    </Badge>
  )
}
