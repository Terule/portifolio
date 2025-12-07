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

export default function Home() {
  const techStack = [
    { name: 'Next.js', icon: SiNextdotjs, color: 'nextjs' },
    { name: 'React', icon: SiReact, color: 'react' },
    { name: 'TypeScript', icon: SiTypescript, color: 'typescript' },
    { name: 'Fastify', icon: SiFastify, color: 'fastify' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'nodejs' },
    { name: 'PowerShell', icon: SiPowers, color: 'powershell' },
    { name: 'n8n', icon: SiN8N, color: 'n8n' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'postgresql' },
  ]
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30">
      {/* --- HEADER --- */}
      <header className="fixed top-0 w-full border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md z-50">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <div className="font-roboto font-bold text-xl tracking-tight text-slate-100">
            Rafael<span className="text-cyan-500">.dev</span>
          </div>

          <nav className="flex gap-4">
            <Button
              asChild
              className="text-slate-400 hover:text-cyan-400 hover:bg-slate-900"
              size="sm"
              variant="ghost"
            >
              <Link href="https://github.com/Terule" target="_blank">
                <SiGithub className="h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              className="text-slate-400 hover:text-cyan-400 hover:bg-slate-900"
              size="sm"
              variant="ghost"
            >
              <Link href="https://linkedin.com/in/aguiar_fael" target="_blank">
                <SiLinkedin className="h-4 w-4" />
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 pt-32 pb-20">
        {/* --- HERO SECTION --- */}
        <section className="mb-16 space-y-6">
          {/* Aplicando Roboto no Título Principal */}
          <h1 className="font-roboto text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100">
            Engenheiro de Software & <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600">
              Especialista em Operações
            </span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
            Unindo a solidez da infraestrutura corporativa com a agilidade do
            desenvolvimento moderno. Foco em automação, performance e código
            limpo.
          </p>
        </section>

        {/* --- SKILLS --- */}
        <section className="mb-20">
          <h2 className="font-roboto mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">
            Tech Stack Principal
          </h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <div
                className="flex items-center gap-2 rounded-full bg-slate-900 border border-slate-800 px-4 py-1.5 text-sm text-slate-300 font-mono hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-default group"
                key={tech.name}
              >
                {/* Renderiza o componente do ícone dinamicamente */}
                <tech.icon
                  className={`text-slate-500 group-hover:text-${tech.color} transition-colors`}
                />
                {tech.name}
              </div>
            ))}
          </div>
        </section>

        {/* --- PROJETOS --- */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            {/* Aplicando Roboto no Título da Seção */}
            <h2 className="font-roboto text-2xl font-bold text-slate-100">
              O que estou construindo
            </h2>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Card 1 */}
            <div className="group rounded-xl border border-slate-800 bg-slate-900/40 p-6 hover:border-cyan-500/40 transition-all">
              {/* Aplicando Roboto no Nome do Projeto */}
              <h3 className="font-roboto text-xl font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
                Finanças App
              </h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Plataforma de gestão financeira pessoal focada em performance e
                controle de gastos.
              </p>
              <div className="mt-4 flex gap-2 text-xs font-mono text-slate-500">
                <span>Next.js</span>
                <span>•</span>
                <span>Fastify</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group rounded-xl border border-slate-800 bg-slate-900/40 p-6 hover:border-cyan-500/40 transition-all">
              {/* Aplicando Roboto no Nome do Projeto */}
              <h3 className="font-roboto text-xl font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
                IT Ops Automation
              </h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Conjunto de scripts e fluxos para automatizar o onboarding de
                usuários e auditoria de AD.
              </p>
              <div className="mt-4 flex gap-2 text-xs font-mono text-slate-500">
                <span>PowerShell</span>
                <span>•</span>
                <span>n8n</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="mt-24 border-t border-slate-800 pt-8 text-center text-sm text-slate-600">
          <p>
            © {new Date().getFullYear()} • Construído com Next.js & Tailwind
          </p>
        </footer>
      </main>
    </div>
  )
}
