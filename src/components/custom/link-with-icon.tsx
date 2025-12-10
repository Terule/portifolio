import Link from 'next/link'
import type { IconType } from 'react-icons'

interface LinkWithIconProps {
  icon?: IconType
  href: string
  label: string
  shortLabel: string
  iconPosition?: 'left' | 'right'
}

function LinkWithIcon({
  icon: Icon,
  href,
  label,
  shortLabel,
  iconPosition = 'left',
}: LinkWithIconProps) {
  return (
    <Link href={href} target="_blank">
      {Icon && iconPosition === 'left' && <Icon className="mr-2 h-4 w-4" />}
      <span className="hidden md:inline">{label}</span>
      <span className="inline md:hidden">{shortLabel}</span>
      {Icon && iconPosition === 'right' && <Icon className="ml-2 h-4 w-4" />}
    </Link>
  )
}
export default LinkWithIcon
