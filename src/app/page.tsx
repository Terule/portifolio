import type { IconType } from 'react-icons'
import {
  SiBiome,
  SiExpress,
  SiFastify,
  SiGit,
  SiGithub,
  SiGmail,
  SiJavascript,
  SiLinkedin,
  SiMaterialdesign,
  SiMysql,
  SiN8N,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPowers,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from 'react-icons/si'

import { getProfilePhotoUrl } from '@/lib/profile'

import ProfilePhotoMorph from '@/components/custom/profile-photo-morph'
import SmButton from '@/components/custom/sm-button'
import StackBadge from '@/components/custom/stack-badge'

type TechItem = {
  name: string
  icon: IconType
}

export default async function Home() {
  const profilePhotoUrl = await getProfilePhotoUrl()
  const techStack: TechItem[] = [
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'React', icon: SiReact },
    { name: 'Shadcn UI', icon: SiShadcnui },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Material UI', icon: SiMaterialdesign },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Express', icon: SiExpress },
    { name: 'Fastify', icon: SiFastify },
    { name: 'Biome', icon: SiBiome },
    { name: 'Zod', icon: SiZod },
    { name: 'Prisma', icon: SiPrisma },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MySQL', icon: SiMysql },
    { name: 'Git', icon: SiGit },
    { name: 'GitHub', icon: SiGithub },
    { name: 'PowerShell', icon: SiPowers },
    { name: 'n8n', icon: SiN8N },
  ]

  const highlights = [
    { label: 'Years in IT', value: '10+' },
    { label: 'Projects Built', value: '30+' },
    { label: 'Core Stacks', value: '12+' },
  ]

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
              className="rounded-full border border-transparent px-3 py-1.5 text-sm font-semibold text-slate-300 transition-colors hover:border-slate-700 hover:text-cyan-300"
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
        <section className="animate-in fade-in slide-in-from-bottom-6 mb-10 grid gap-8 duration-700 md:mb-12 md:grid-cols-5 md:gap-12">
          <div className="space-y-7 md:col-span-3">
            <span className="inline-flex rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1 font-roboto text-xs font-semibold tracking-wider text-cyan-300 uppercase md:text-sm">
              Full-Stack Engineer + IT Operations
            </span>

            <h1 className="font-roboto text-4xl font-black tracking-tight text-slate-100 md:text-6xl">
              Building reliable
              <span className="block bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                digital operations products
              </span>
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              I design and ship tools that connect infrastructure reliability
              with product velocity. With 10+ years in IT, I build software that
              is operationally realistic and developer-friendly.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                className="inline-flex items-center rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 transition-all hover:bg-cyan-400"
                href="mailto:terule@gmail.com"
              >
                Let's build together
              </a>
              <a
                className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/70 px-5 py-2 text-sm font-semibold text-slate-100 transition-all hover:border-cyan-500/60 hover:text-cyan-300"
                href="https://github.com/Terule"
                rel="noopener"
                target="_blank"
              >
                View GitHub
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  className="rounded-2xl border border-slate-800/80 bg-slate-900/55 px-4 py-4 backdrop-blur-sm"
                  key={item.label}
                >
                  <p className="text-2xl font-black text-slate-100">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs tracking-wide text-slate-400 uppercase">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="animate-in fade-in slide-in-from-right-8 duration-700 md:col-span-2 md:self-end">
            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/65 p-6 backdrop-blur-md md:-mt-6">
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs tracking-wider text-slate-400 uppercase">
                  Profile Snapshot
                </p>
                <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-300 uppercase">
                  Available
                </span>
              </div>

              <div className="mt-6">
                <p className="text-sm leading-relaxed text-slate-300">
                  Product-minded engineer focused on systems, automation, and
                  practical user value.
                </p>

                <div className="mt-3.5">
                  <ProfilePhotoMorph src={profilePhotoUrl ?? undefined} />
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section className="animate-in fade-in slide-in-from-bottom-6 mb-8 rounded-3xl border border-slate-800/80 bg-slate-900/45 p-6 duration-700 md:mb-10 md:p-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="font-roboto text-xs font-bold tracking-widest text-slate-500 uppercase">
              Main Tech Stack
            </h2>
            <p className="text-xs text-slate-500">
              Tools I use to ship production-ready products
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3">
            {techStack.map((tech) => (
              <StackBadge icon={tech.icon} key={tech.name} name={tech.name} />
            ))}
          </div>
        </section>

        <footer className="mt-12 flex flex-col items-center gap-6 border-t border-slate-800 pb-12 pt-8 md:mt-14">
          <p className="text-center text-sm text-slate-600">
            © {new Date().getFullYear()} • Built with Next.js & Tailwind
          </p>
        </footer>
      </main>
    </div>
  )
}
