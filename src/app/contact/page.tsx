import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si'

import SmButton from '@/components/custom/sm-button'

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-linear-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-200 selection:bg-cyan-500/30">
      <div className="pointer-events-none absolute -top-12 left-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <header className="fixed top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
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
              className="rounded-full border border-transparent px-3 py-1.5 text-sm font-semibold text-slate-300 transition-colors hover:border-slate-700 hover:text-cyan-300"
              href="/experience"
            >
              Experience
            </a>
            <a
              className="rounded-full border border-transparent px-3 py-1.5 text-sm font-semibold text-cyan-300"
              href="/contact"
            >
              Contact
            </a>
          </nav>

          <nav className="flex gap-1 md:gap-2">
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
        <section className="animate-in fade-in slide-in-from-bottom-6 mb-8 grid gap-5 duration-700 md:mb-10 md:grid-cols-5 md:gap-8">
          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/55 p-6 backdrop-blur-sm md:col-span-3 md:p-8">
            <p className="inline-flex rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1 text-xs tracking-widest text-cyan-300 uppercase">
              Contact
            </p>
            <h1 className="mt-4 font-roboto text-4xl font-black tracking-tight text-slate-100 md:text-6xl">
              Let&apos;s ship your
              <span className="block bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                next practical product
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
              Open to full-stack product work, platform tooling, and
              automation-heavy initiatives. Reach out with your timeline,
              constraints, and goals.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
                href="mailto:terule@gmail.com"
              >
                Start via Email
              </a>
              <a
                className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/70 px-5 py-2 text-sm font-semibold text-slate-100 transition-colors hover:border-cyan-500/60 hover:text-cyan-300"
                href="https://linkedin.com/in/aguiar-fael"
                rel="noopener"
                target="_blank"
              >
                Message on LinkedIn
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-cyan-500/25 bg-linear-to-b from-cyan-500/12 to-slate-900/70 p-6 md:col-span-2 md:p-8">
            <p className="text-xs tracking-widest text-cyan-300 uppercase">
              Availability
            </p>
            <p className="mt-3 font-roboto text-2xl font-bold text-slate-100 md:text-3xl">
              Open for new builds
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Best response channel is email. Typical response window:
              <span className="text-cyan-300"> within 24 hours</span>.
            </p>

            <div className="mt-6 space-y-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/50 px-4 py-3">
                <p className="text-xs tracking-wide text-slate-500 uppercase">
                  Focus Areas
                </p>
                <p className="mt-1 text-sm text-slate-200">
                  Product engineering, platform tooling, process automation
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/50 px-4 py-3">
                <p className="text-xs tracking-wide text-slate-500 uppercase">
                  Collaboration
                </p>
                <p className="mt-1 text-sm text-slate-200">
                  Async-first with clear milestones and weekly updates
                </p>
              </div>
            </div>
          </aside>
        </section>

        <section className="animate-in fade-in slide-in-from-bottom-6 grid gap-4 duration-700 md:grid-cols-3 md:gap-5">
          <a
            className="group rounded-2xl border border-slate-800 bg-slate-900/55 p-5 transition-colors hover:border-cyan-500/45"
            href="mailto:terule@gmail.com"
          >
            <div className="mb-4 inline-flex rounded-xl border border-cyan-500/35 bg-cyan-500/10 p-2.5 text-cyan-300">
              <SiGmail className="h-5 w-5" />
            </div>
            <p className="font-roboto text-xl font-bold text-slate-100">Email</p>
            <p className="mt-2 text-sm text-slate-300">
              Share scope, timeline, and context to kick off.
            </p>
            <p className="mt-4 text-sm font-semibold text-cyan-300 transition-colors group-hover:text-cyan-200">
              terule@gmail.com
            </p>
          </a>

          <a
            className="group rounded-2xl border border-slate-800 bg-slate-900/55 p-5 transition-colors hover:border-cyan-500/45"
            href="https://linkedin.com/in/aguiar-fael"
            rel="noopener"
            target="_blank"
          >
            <div className="mb-4 inline-flex rounded-xl border border-cyan-500/35 bg-cyan-500/10 p-2.5 text-cyan-300">
              <SiLinkedin className="h-5 w-5" />
            </div>
            <p className="font-roboto text-xl font-bold text-slate-100">LinkedIn</p>
            <p className="mt-2 text-sm text-slate-300">
              Connect for long-term collaboration and project updates.
            </p>
            <p className="mt-4 text-sm font-semibold text-cyan-300 transition-colors group-hover:text-cyan-200">
              /in/aguiar-fael
            </p>
          </a>

          <a
            className="group rounded-2xl border border-slate-800 bg-slate-900/55 p-5 transition-colors hover:border-cyan-500/45"
            href="https://github.com/Terule"
            rel="noopener"
            target="_blank"
          >
            <div className="mb-4 inline-flex rounded-xl border border-cyan-500/35 bg-cyan-500/10 p-2.5 text-cyan-300">
              <SiGithub className="h-5 w-5" />
            </div>
            <p className="font-roboto text-xl font-bold text-slate-100">GitHub</p>
            <p className="mt-2 text-sm text-slate-300">
              Review code quality, architecture style, and build standards.
            </p>
            <p className="mt-4 text-sm font-semibold text-cyan-300 transition-colors group-hover:text-cyan-200">
              github.com/Terule
            </p>
          </a>
        </section>
      </main>
    </div>
  )
}
