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

import ProjectCard from '@/components/custom/project-card'
import SmButton from '@/components/custom/sm-button'
import StackBadge from '@/components/custom/stack-badge'
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

type TechItem = {
  name: string
  icon: IconType
}

type ProjectItem = {
  title: string
  status: string
  description: string
  techs: TechItem[]
}

export default function Home() {
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

  const featuredProject: ProjectItem & {
    impact: string
    role: string
  } = {
    title: 'DL Manager',
    status: 'Shipping v1',
    description:
      'Microsoft 365 distribution list manager with owner-based access control and bulk member operations.',
    impact:
      'Cuts repetitive admin workflows and gives owners controlled self-service without tenant-wide privileges.',
    role: 'Product design, architecture, and full-stack implementation',
    techs: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Shadcn UI', icon: SiShadcnui },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Biome', icon: SiBiome },
    ],
  }

  const projects: ProjectItem[] = [
    {
      title: 'Finance App',
      status: 'In Progress',
      description:
        'Personal finance management platform focused on performance and expense tracking.',
      techs: [
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'Biome', icon: SiBiome },
        { name: 'Prisma', icon: SiPrisma },
        { name: 'Shadcn UI', icon: SiShadcnui },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'PostgreSQL', icon: SiPostgresql },
      ],
    },
    {
      title: 'Portfolio V1',
      status: 'Live',
      description:
        'This personal website, built with modern frontend best practices and performance.',
      techs: [
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'React', icon: SiReact },
        { name: 'Biome', icon: SiBiome },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'Shadcn UI', icon: SiShadcnui },
      ],
    },
    {
      title: 'IT Ops Automation',
      status: 'Operational',
      description:
        'Suite of scripts and workflows to automate user onboarding and AD auditing.',
      techs: [
        { name: 'PowerShell', icon: SiPowers },
        { name: 'n8n', icon: SiN8N },
      ],
    },
  ]

  const highlights = [
    { label: 'Years in IT', value: '10+' },
    { label: 'Projects Built', value: '30+' },
    { label: 'Core Stacks', value: '12+' },
  ]

  const timeline = [
    {
      period: '2014 - 2020',
      role: 'IT Infrastructure and Operations',
      summary:
        'Built reliability-first foundations across support, network, and systems operations.',
      outcome:
        'Reduced operational risk and improved service continuity through standardization.',
    },
    {
      period: '2020 - 2024',
      role: 'Automation and Platform Enablement',
      summary:
        'Created scripts and internal tools to remove repetitive operational bottlenecks.',
      outcome:
        'Accelerated onboarding, auditing, and troubleshooting workflows.',
    },
    {
      period: '2024 - Today',
      role: 'Full-Stack Product Development',
      summary:
        'Designing and shipping internal and customer-facing products with modern web stack.',
      outcome:
        'Bridged infrastructure knowledge with product engineering delivery.',
    },
  ]

  return (
    <div className="relative min-h-screen overflow-x-clip bg-linear-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-200 selection:bg-cyan-500/30">
      <div className="pointer-events-none absolute -top-12 left-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <header className="fixed top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <div className="mr-4 truncate font-roboto text-lg font-bold tracking-tight text-slate-100 md:text-xl">
            Rafael
            <span className="bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              .dev.br
            </span>
          </div>

          <nav className="shrink-0 gap-1 md:gap-2 flex">
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
        <section className="animate-in fade-in slide-in-from-bottom-6 mb-20 grid gap-8 duration-700 md:mb-24 md:grid-cols-5 md:gap-12">
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

          <aside className="animate-in fade-in slide-in-from-right-8 duration-700 md:col-span-2">
            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/65 p-6 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs tracking-wider text-slate-400 uppercase">
                  Profile Snapshot
                </p>
                <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-300 uppercase">
                  Available
                </span>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <div className="grid h-20 w-20 place-items-center rounded-2xl bg-linear-to-br from-cyan-500/20 via-cyan-500/10 to-slate-800 text-2xl font-black text-cyan-300">
                  RA
                </div>
                <div>
                  <p className="font-roboto text-xl font-bold text-slate-100">
                    Rafael Aguiar
                  </p>
                  <p className="text-sm text-slate-400">Full-Stack Developer</p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-slate-300">
                Product-minded engineer focused on systems, automation, and
                practical user value.
              </p>
            </div>
          </aside>
        </section>

        <section className="animate-in fade-in slide-in-from-bottom-6 mb-16 rounded-3xl border border-slate-800/80 bg-slate-900/45 p-6 duration-700 md:mb-20 md:p-8">
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

        <section className="animate-in fade-in slide-in-from-bottom-6 mb-16 rounded-3xl border border-slate-800/80 bg-slate-900/45 p-6 duration-700 md:mb-20 md:p-8">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="font-roboto text-xs font-bold tracking-widest text-slate-500 uppercase">
                Featured Build
              </p>
              <h2 className="mt-2 font-roboto text-2xl font-extrabold text-slate-100 md:text-3xl">
                {featuredProject.title}
              </h2>
            </div>

            <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 uppercase">
              {featuredProject.status}
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-5">
            <div className="md:col-span-3">
              <p className="text-base leading-relaxed text-slate-300 md:text-lg">
                {featuredProject.description}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {featuredProject.impact}
              </p>
              <p className="mt-6 rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-3 text-sm text-slate-300">
                <span className="text-slate-500">Role:</span>{' '}
                {featuredProject.role}
              </p>
            </div>

            <div className="md:col-span-2">
              <p className="mb-3 text-xs tracking-wider text-slate-500 uppercase">
                Core Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {featuredProject.techs.map((t) => (
                  <span
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/70 px-3 py-1.5 text-xs text-slate-300"
                    key={t.name}
                  >
                    <t.icon className="text-cyan-400" />
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="animate-in fade-in slide-in-from-bottom-6 mb-16 duration-700 md:mb-20">
          <div className="mb-8 flex items-center gap-3">
            <h2 className="font-roboto text-xl font-bold text-slate-100 md:text-2xl">
              What I'm building
            </h2>
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-500" />
            </span>
          </div>

          <div className="px-0 md:px-8">
            <Carousel
              className="w-full"
              opts={{
                align: 'start',
                loop: true,
              }}
            >
              <CarouselContent>
                {projects.map((project) => (
                  <ProjectCard
                    description={project.description}
                    key={project.title}
                    status={project.status}
                    techs={project.techs}
                    title={project.title}
                  />
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden border-slate-700 bg-slate-900 text-slate-400 hover:border-cyan-500 hover:text-cyan-400 md:flex" />
              <CarouselNext className="hidden border-slate-700 bg-slate-900 text-slate-400 hover:border-cyan-500 hover:text-cyan-400 md:flex" />
            </Carousel>
          </div>
        </section>

        <section className="animate-in fade-in slide-in-from-bottom-6 mb-16 rounded-3xl border border-slate-800/80 bg-slate-900/45 p-6 duration-700 md:mb-20 md:p-8">
          <h2 className="font-roboto text-xl font-bold text-slate-100 md:text-2xl">
            Experience Timeline
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            A progression from infrastructure reliability to full-stack product
            delivery.
          </p>

          <div className="mt-8 space-y-6">
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

        <section className="animate-in fade-in slide-in-from-bottom-6 rounded-3xl border border-cyan-500/25 bg-linear-to-r from-cyan-500/10 via-slate-900/80 to-slate-900/80 p-6 duration-700 md:p-8">
          <p className="text-xs tracking-widest text-cyan-300 uppercase">
            Contact
          </p>
          <h2 className="mt-2 font-roboto text-2xl font-extrabold text-slate-100 md:text-3xl">
            Need a reliable engineer to ship your next product?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
            I can help with architecture, implementation, and operationally
            sound delivery from day one.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 transition-all hover:bg-cyan-400"
              href="mailto:terule@gmail.com"
            >
              Start a conversation
            </a>
            <a
              className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/70 px-5 py-2 text-sm font-semibold text-slate-100 transition-all hover:border-cyan-500/60 hover:text-cyan-300"
              href="https://linkedin.com/in/aguiar-fael"
              rel="noopener"
              target="_blank"
            >
              Connect on LinkedIn
            </a>
          </div>
        </section>

        <footer className="mt-24 flex flex-col items-center gap-6 border-t border-slate-800 pb-12 pt-8">
          <p className="text-center text-sm text-slate-600">
            © {new Date().getFullYear()} • Built with Next.js & Tailwind
          </p>
        </footer>
      </main>
    </div>
  )
}
