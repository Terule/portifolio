import { ArrowUpRight } from 'lucide-react'

import { timeline } from '@/lib/experience'

import SiteFooter from '@/components/custom/site-footer'
import SiteHeader from '@/components/custom/site-header'

export default function ExperiencePage() {
  return (
    <div className="portfolio-page">
      <SiteHeader active="experience" />
      <main className="content-page">
        <section className="page-intro page-intro--compact">
          <p className="eyebrow">Experience</p>
          <h1>
            From keeping systems
            <br />
            running to moving them forward.
          </h1>
        </section>

        <section className="timeline">
          <div className="timeline__intro">
            <p>
              A decade spent understanding the operational side of technology
              now informs every product decision I make.
            </p>
            <a className="text-link" href="/contact">
              Work with me <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <ol>
            {timeline.map((item, index) => (
              <li key={`${item.period}-${item.role}`}>
                <p className="timeline__number">0{index + 1}</p>
                <p className="timeline__period">{item.period}</p>
                <div>
                  <h2>{item.role}</h2>
                  <p>{item.summary}</p>
                </div>
                <p className="timeline__outcome">{item.outcome}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
