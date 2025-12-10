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
      className="text-slate-400 hover:text-cyan-400 hover:bg-slate-900 px-2 md:px-4"
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
