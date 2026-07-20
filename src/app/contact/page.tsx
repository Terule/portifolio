import { ArrowUpRight } from 'lucide-react'
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si'

import SiteFooter from '@/components/custom/site-footer'
import SiteHeader from '@/components/custom/site-header'

const channels = [
  {
    href: 'mailto:terule@gmail.com',
    icon: SiGmail,
    label: 'Email',
    value: 'terule@gmail.com',
  },
  {
    href: 'https://linkedin.com/in/aguiar-fael',
    icon: SiLinkedin,
    label: 'LinkedIn',
    value: '/in/aguiar-fael',
  },
  {
    href: 'https://github.com/Terule',
    icon: SiGithub,
    label: 'GitHub',
    value: 'github.com/Terule',
  },
]

export default function ContactPage() {
  return (
    <div className="portfolio-page">
      <SiteHeader active="contact" />
      <main className="contact-page">
        <section className="contact-hero">
          <p className="eyebrow">Start a conversation</p>
          <h1>
            Bring the problem.
            <br />
            <em>We&apos;ll find the shape.</em>
          </h1>
          <p>
            I collaborate with teams and founders who care about useful, durable
            software. A concise note is the best place to start.
          </p>
          <a className="button button--primary" href="mailto:terule@gmail.com">
            Write an email <ArrowUpRight aria-hidden="true" />
          </a>
        </section>

        <section className="contact-channels">
          <p className="section-label">
            <span>Contact</span> Choose your channel
          </p>
          <div>
            {channels.map(({ href, icon: Icon, label, value }) => (
              <a
                href={href}
                key={label}
                rel="noopener"
                target={href.startsWith('http') ? '_blank' : undefined}
              >
                <Icon aria-hidden="true" />
                <span>{label}</span>
                <strong>{value}</strong>
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
