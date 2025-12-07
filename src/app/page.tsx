import Link from 'next/link'
import {
  SiFastify,
  SiGithub,
  SiLinkedin,
  SiN8N,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPowers,
  SiReact,
  SiTypescript,
} from 'react-icons/si'

import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default function Home() {
  const techStack = [
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'React', icon: SiReact },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Fastify', icon: SiFastify },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'PowerShell', icon: SiPowers },
    { name: 'n8n', icon: SiN8N },
    { name: 'PostgreSQL', icon: SiPostgresql },
  ]

  const projects = [
    {
      title: 'Finance App',
      description:
        'Personal finance management platform focused on performance and expense tracking.',
      techs: [
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'Fastify', icon: SiFastify },
        { name: 'PostgreSQL', icon: SiPostgresql },
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
    {
      title: 'Portfolio V1',
      description:
        'This personal website, built with modern frontend best practices and performance.',
      techs: [
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'React', icon: SiReact },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30">
      <header className="fixed top-0 w-full border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md z-50">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <div className="font-roboto font-bold text-xl tracking-tight text-slate-100">
            Rafael Aguiar<span className="text-cyan-500">.dev</span>
          </div>

          <nav className="flex gap-2">
            <Button
              asChild
              className="text-slate-400 hover:text-cyan-400 hover:bg-slate-900"
              size="sm"
              variant="ghost"
            >
              <Link href="https://github.com/Terule" target="_blank">
                <SiGithub className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>

            <Button
              asChild
              className="text-slate-400 hover:text-cyan-400 hover:bg-slate-900"
              size="sm"
              variant="ghost"
            >
              <Link href="https://linkedin.com/in/aguiar_fael" target="_blank">
                <SiLinkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 pt-32 pb-20">
        <section className="mb-16 space-y-6">
          <h1 className="font-roboto text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100">
            Software Engineer & <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600">
              Operations Specialist
            </span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
            Combining corporate infrastructure reliability with modern
            development agility. Focused on automation, performance, and clean
            code.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="font-roboto mb-6 text-xs font-bold uppercase tracking-widest text-slate-500">
            Main Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <div
                className="flex items-center gap-2 rounded-full bg-slate-900 border border-slate-800 px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:-translate-y-0.5 hover:bg-slate-800 hover:border-slate-700 hover:shadow-lg cursor-default"
                // Container "Pill": Borda, Fundo e Arredondamento aplicados aqui
                key={tech.name}
              >
                {/* Ícone: Apenas tamanho e cor (ciano para destaque sutil) */}
                <tech.icon className="text-lg text-cyan-500" />

                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-8">
            <h2 className="font-roboto text-2xl font-bold text-slate-100">
              What I'm building
            </h2>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
          </div>

          <div className="px-8">
            <Carousel
              className="w-full"
              opts={{
                align: 'start',
                loop: true,
              }}
            >
              <CarouselContent>
                {projects.map((project) => (
                  <CarouselItem
                    className="md:basis-1/2 lg:basis-1/2"
                    key={project.title}
                  >
                    <div className="h-full flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/40 p-6 hover:border-cyan-500/40 transition-all group">
                      <div>
                        <h3 className="font-roboto text-xl font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.techs.map((t) => (
                          <span
                            className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 bg-slate-950/50 px-2 py-1 rounded"
                            key={t.name}
                          >
                            <t.icon className="text-cyan-500/70" /> {t.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-slate-800 bg-slate-900 text-slate-400 hover:text-cyan-400 hover:border-cyan-500" />
              <CarouselNext className="border-slate-800 bg-slate-900 text-slate-400 hover:text-cyan-400 hover:border-cyan-500" />
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
