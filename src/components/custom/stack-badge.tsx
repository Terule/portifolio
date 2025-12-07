import { Badge } from '@/components/ui/badge'

export function StackBadge({ children }: React.PropsWithChildren) {
  return (
    <Badge asChild>
      <span className="inline-flex items-center gap-1 text-[10px] md:text-xs font-mono text-slate-500 bg-slate-950/50 px-2 py-1 rounded">
        {children}
      </span>
    </Badge>
  )
}
