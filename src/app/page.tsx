import { ArrowDown, ArrowUpRight } from 'lucide-react'

import { getProfilePhotoUrl } from '@/lib/profile'

import ProfilePhotoMorph from '@/components/custom/profile-photo-morph'
import SiteFooter from '@/components/custom/site-footer'
import SiteHeader from '@/components/custom/site-header'

const capabilities = [
  'Product engineering',
  'Platform reliability',
  'Workflow automation',
]

const proof = [
  { detail: 'years building in IT', value: '10+' },
  { detail: 'products and systems shipped', value: '30+' },
  { detail: 'from idea to operation', value: '∞' },
]

export default async function Home() {
  const profilePhotoUrl = await getProfilePhotoUrl()

  return (
    <div className="portfolio-page">
      <SiteHeader active="home" />

      <main>
        <section className="hero">
          <div className="hero__intro">
            <p className="eyebrow">Independent software engineer · Brazil</p>
            <h1>
              Systems with
              <em> momentum.</em>
            </h1>
            <p className="hero__copy">
              I design, build, and operate digital products that make complex
              work feel clear, fast, and dependable.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="/projects">
                Explore selected work <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="text-link" href="mailto:terule@gmail.com">
                Start a conversation
              </a>
            </div>
          </div>

          <div className="hero__portrait">
            <div className="portrait-note">
              <span /> Available for thoughtful collaborations
            </div>
            <ProfilePhotoMorph src={profilePhotoUrl ?? undefined} />
            <p className="portrait-caption">
              Rafael Aguiar — engineer, operator, builder
            </p>
          </div>

          <a className="hero__scroll" href="#approach">
            <ArrowDown aria-hidden="true" /> Scroll to discover
          </a>
        </section>

        <section className="proof-grid" id="approach">
          {proof.map((item) => (
            <article key={item.detail}>
              <strong>{item.value}</strong>
              <p>{item.detail}</p>
            </article>
          ))}
        </section>

        <section className="approach">
          <p className="eyebrow">How I work</p>
          <div className="approach__body">
            <h2>
              Practical at every
              <br /> layer of the stack.
            </h2>
            <div>
              <p>
                The best software respects the people who use it and the teams
                who keep it running. I pair product thinking with operational
                discipline to make both happen.
              </p>
              <ul>
                {capabilities.map((capability, index) => (
                  <li key={capability}>
                    <span>0{index + 1}</span>
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="closing-cta">
          <p className="eyebrow">Have an idea worth making real?</p>
          <a href="/contact">
            Let&apos;s build it <ArrowUpRight aria-hidden="true" />
          </a>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
