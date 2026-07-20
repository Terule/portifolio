import { ArrowUpRight } from 'lucide-react'

import ThemeToggle from './theme-toggle'

interface SiteHeaderProps {
  active: 'home' | 'projects' | 'experience' | 'contact'
}

const links = [
  { href: '/', label: 'Home', value: 'home' },
  { href: '/projects', label: 'Selected work', value: 'projects' },
  { href: '/experience', label: 'Experience', value: 'experience' },
]

export default function SiteHeader({ active }: SiteHeaderProps) {
  return (
    <header className="portfolio-header">
      <div className="portfolio-header__inner">
        <a aria-label="Rafael Aguiar home" className="portfolio-mark" href="/">
          RA<span>®</span>
        </a>

        <nav aria-label="Main navigation" className="portfolio-nav">
          {links.map((link) => (
            <a
              aria-current={active === link.value ? 'page' : undefined}
              className={active === link.value ? 'is-active' : undefined}
              href={link.href}
              key={link.value}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="portfolio-header__actions">
          <ThemeToggle />
          <a className="header-contact" href="/contact">
            Let&apos;s talk <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  )
}
