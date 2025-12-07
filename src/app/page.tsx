import Link from 'next/link'
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
  SiZod
} from 'react-icons/si'

import ProjectCard from '@/components/custom/project-card'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

export default function Home() {
  const techStack = [
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

  const projects = [
    {
      title: 'Finance App',
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
      description:
        'Suite of scripts and workflows to automate user onboarding and AD auditing.',
      techs: [
        { name: 'PowerShell', icon: SiPowers },
        { name: 'n8n', icon: SiN8N },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30">
      <header className="fixed top-0 w-full border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md z-50">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 md:px-6 py-4">
          <div className="font-roboto font-bold text-lg md:text-xl tracking-tight text-slate-100 truncate mr-4">
            Rafael
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600">
              .dev.br
            </span>
          </div>

          <nav className="flex gap-1 md:gap-2 shrink-0">
            <Button
              asChild
              className="text-slate-400 hover:text-cyan-400 hover:bg-slate-900 px-2 md:px-4"
              size="sm"
              variant="ghost"
            >
              <Link href="https://github.com/Terule" target="_blank">
                <SiGithub className="mr-2 h-4 w-4" />
                <span className="hidden md:inline">GitHub</span>
                <span className="inline md:hidden">Git</span>
              </Link>
            </Button>

            <Button
              asChild
              className="text-slate-400 hover:text-cyan-400 hover:bg-slate-900 px-2 md:px-4"
              size="sm"
              variant="ghost"
            >
              <Link href="https://linkedin.com/in/aguiar-fael" target="_blank">
                <SiLinkedin className="mr-2 h-4 w-4" />
                <span className="hidden md:inline">LinkedIn</span>
                <span className="inline md:hidden">In</span>
              </Link>
            </Button>

            <Button
              asChild
              className="text-slate-400 hover:text-cyan-400 hover:bg-slate-900 px-2 md:px-4"
              size="sm"
              variant="ghost"
            >
              <Link href="mailto:terule@gmail.com" target="_blank">
                <SiGmail className="mr-2 h-4 w-4" />
                <span className="hidden md:inline">Email</span>
                <span className="inline md:hidden">Mail</span>
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 pt-28 md:pt-32 pb-20">
        <section className="mb-12 md:mb-16 space-y-6">
          <span className="font-roboto text-cyan-500 font-medium tracking-wider uppercase text-sm md:text-base">
            Hi, I'm Rafael Aguiar 👋
          </span>
          <h1 className="font-roboto text-3xl md:text-5xl font-extrabold tracking-tight text-slate-100">
            Full-Stack Developer & <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600">
              IT Operations Expert
            </span>
          </h1>
          <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-xl">
            Leveraging <strong>10+ years of IT experience</strong> to build
            robust, scalable applications. I bridge the gap between operational
            stability and modern software agility, transforming complex
            infrastructure needs into clean, efficient code.
          </p>
        </section>

        <section className="mb-16 md:mb-20">
          <h2 className="font-roboto mb-6 text-xs font-bold uppercase tracking-widest text-slate-500">
            Main Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {techStack.map((tech) => (
              <div
                className="group flex items-center gap-2 rounded-full bg-slate-900 border border-slate-800 px-4 py-2 text-xs md:text-sm font-medium text-slate-300 transition-all hover:-translate-y-0.5 hover:bg-slate-800 hover:border-slate-700 hover:shadow-lg cursor-default"
                key={tech.name}
              >
                <tech.icon className="text-base md:text-lg text-slate-500 group-hover:text-cyan-500 transition-colors duration-300" />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-8">
            <h2 className="font-roboto text-xl md:text-2xl font-bold text-slate-100">
              What I'm building
            </h2>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
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
                    techs={project.techs}
                    title={project.title}
                  />
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex border-slate-800 bg-slate-900 text-slate-400 hover:text-cyan-400 hover:border-cyan-500" />
              <CarouselNext className="hidden md:flex border-slate-800 bg-slate-900 text-slate-400 hover:text-cyan-400 hover:border-cyan-500" />
            </Carousel>
          </div>
        </section>

        <footer className="mt-24 border-t border-slate-800 pt-8 pb-12 flex flex-col items-center gap-6">
          <p className="text-center text-sm text-slate-600">
            © {new Date().getFullYear()} • Built with Next.js & Tailwind
          </p>
        </footer>
      </main>
    </div>
  )
}
