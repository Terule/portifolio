import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si'

import { timeline } from '@/lib/experience'

import SmButton from '@/components/custom/sm-button'
import ThemeToggle from '@/components/custom/theme-toggle'

export default function ExperiencePage() {
  return (
    <div className="site-shell relative min-h-screen overflow-x-clip selection:bg-cyan-500/30">
      <div className="pointer-events-none absolute -top-12 left-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <header className="site-header fixed top-0 z-50 w-full backdrop-blur-md">
        <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-2 px-4 py-4 md:px-6">
          <a
            className="mr-4 truncate font-roboto text-lg font-bold tracking-tight text-slate-100 md:text-xl"
            href="/"
          >
            Rafael
            <span className="bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              .dev.br
            </span>
          </a>

          <nav className="hidden items-center justify-center gap-1 md:flex">
            <a
              className="rounded-full border border-transparent px-3 py-1.5 text-sm font-semibold text-slate-300 transition-colors hover:border-slate-700 hover:text-cyan-300"
              href="/"
            >
              Home
            </a>
            <a
              className="rounded-full border border-transparent px-3 py-1.5 text-sm font-semibold text-slate-300 transition-colors hover:border-slate-700 hover:text-cyan-300"
              href="/projects"
            >
              Projects
            </a>
            <a
              className="rounded-full border border-transparent px-3 py-1.5 text-sm font-semibold text-cyan-300"
              href="/experience"
            >
              Experience
            </a>
            <a
              className="rounded-full border border-transparent px-3 py-1.5 text-sm font-semibold text-slate-300 transition-colors hover:border-slate-700 hover:text-cyan-300"
              href="/contact"
            >
              Contact
            </a>
          </nav>

          <nav className="flex gap-1 md:gap-2">
            <ThemeToggle />
            <SmButton
              href="https://github.com/Terule"
              icon={SiGithub}
              label="GitHub"
              shortLabel="Git"
            />
            <SmButton
              href="https://linkedin.com/in/aguiar-fael"
              icon={SiLinkedin}
              label="LinkedIn"
              shortLabel="In"
            />
            <SmButton
              href="mailto:terule@gmail.com"
              icon={SiGmail}
              label="Email"
              shortLabel="Mail"
            />
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-20 pt-28 md:pt-32">
        <section className="animate-in fade-in slide-in-from-bottom-6 mb-10 duration-700 md:mb-12">
          <p className="text-xs tracking-widest text-cyan-300 uppercase">
            Experience
          </p>
          <h1 className="mt-2 font-roboto text-3xl font-extrabold text-slate-100 md:text-5xl">
            Experience Timeline
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
            A progression from infrastructure reliability to full-stack product
            delivery.
          </p>
        </section>

        <section className="animate-in fade-in slide-in-from-bottom-6 mb-16 rounded-3xl border border-slate-800/80 bg-slate-900/45 p-6 duration-700 md:mb-20 md:p-8">
          <div className="space-y-6">
            {timeline.map((item) => (
              <article
                className="rounded-2xl border border-slate-800 bg-slate-950/45 p-5"
                key={`${item.period}-${item.role}`}
              >
                <p className="text-xs tracking-wider text-cyan-300 uppercase">
                  {item.period}
                </p>
                <h3 className="mt-2 font-roboto text-lg font-bold text-slate-100">
                  {item.role}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.summary}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {item.outcome}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
