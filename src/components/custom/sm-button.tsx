import type { IconType } from 'react-icons'

import LinkWithIcon from './link-with-icon'

import { Button } from '../ui/button'

interface SmButtonProps {
  href: string
  label: string
  shortLabel: string
  icon: IconType
}

function SmButton({ href, icon, label, shortLabel }: SmButtonProps) {
  return (
    <Button
      asChild
      className="rounded-full border border-transparent px-2 text-slate-400 transition-all hover:border-slate-700 hover:bg-slate-900 hover:text-cyan-300 md:px-4"
      size="sm"
      variant="ghost"
    >
      <LinkWithIcon
        href={href}
        icon={icon}
        label={label}
        shortLabel={shortLabel}
      />
    </Button>
  )
}
export default SmButton
