import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si'

import { getFeaturedProject, getNonFeaturedProjects } from '@/lib/projects'

import ProjectCard from '@/components/custom/project-card'
import SmButton from '@/components/custom/sm-button'
import ThemeToggle from '@/components/custom/theme-toggle'
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default async function ProjectsPage() {
  const [featuredProject, projects] = await Promise.all([
    getFeaturedProject(),
    getNonFeaturedProjects(),
  ])

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
              className="rounded-full border border-transparent px-3 py-1.5 text-sm font-semibold text-cyan-300"
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
            Projects
          </p>
          <h1 className="mt-2 font-roboto text-3xl font-extrabold text-slate-100 md:text-5xl">
            What I'm building
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
            Featured and active builds in one place.
          </p>
        </section>

        <section className="animate-in fade-in slide-in-from-bottom-6 mb-16 rounded-3xl border border-slate-800/80 bg-slate-900/45 p-6 duration-700 md:mb-20 md:p-8">
          <div className="grid gap-8 md:grid-cols-5 md:items-start">
            <div className="md:col-span-3">
              <p className="font-roboto text-xs font-bold tracking-widest text-slate-500 uppercase">
                Featured Build
              </p>
              <h2 className="mt-2 font-roboto text-2xl font-extrabold text-slate-100 md:text-3xl">
                {featuredProject.title}
              </h2>

              <p className="mt-8 text-base leading-relaxed text-slate-300 md:text-lg">
                {featuredProject.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {featuredProject.liveUrl ? (
                  <a
                    className="inline-flex items-center rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 transition-all hover:bg-cyan-400"
                    href={featuredProject.liveUrl}
                    rel="noopener"
                    target="_blank"
                  >
                    Visit
                  </a>
                ) : (
                  <span
                    aria-disabled="true"
                    className="inline-flex cursor-not-allowed items-center rounded-full bg-cyan-500/40 px-5 py-2 text-sm font-semibold text-slate-950/80"
                  >
                    Visit
                  </span>
                )}

                {featuredProject.githubUrl ? (
                  <a
                    className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/70 px-5 py-2 text-sm font-semibold text-slate-100 transition-all hover:border-cyan-500 hover:text-cyan-300"
                    href={featuredProject.githubUrl}
                    rel="noopener"
                    target="_blank"
                  >
                    GitHub
                  </a>
                ) : (
                  <span
                    aria-disabled="true"
                    className="inline-flex cursor-not-allowed items-center rounded-full border border-slate-700/60 bg-slate-950/40 px-5 py-2 text-sm font-semibold text-slate-300/70"
                  >
                    GitHub
                  </span>
                )}
              </div>
            </div>

            <div className="md:col-span-2 md:pt-1">
              <div className="flex justify-start md:justify-end">
                <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 uppercase">
                  {featuredProject.status}
                </span>
              </div>

              <p className="mt-8 mb-3 text-xs tracking-wider text-slate-500 uppercase">
                Core Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {featuredProject.tags.map((tag) => (
                  <span
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/70 px-3 py-1.5 text-xs text-slate-300"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="animate-in fade-in slide-in-from-bottom-6 mb-16 duration-700 md:mb-20">
          {projects.length ? (
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
                      coverImageUrl={project.coverImageUrl}
                      description={project.description}
                      githubUrl={project.githubUrl}
                      key={project.id}
                      liveUrl={project.liveUrl}
                      status={project.status}
                      subtitle={project.subtitle}
                      tags={project.tags}
                      title={project.title}
                    />
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden border-slate-700 bg-slate-900 text-slate-400 hover:border-cyan-500 hover:text-cyan-400 md:flex" />
                <CarouselNext className="hidden border-slate-700 bg-slate-900 text-slate-400 hover:border-cyan-500 hover:text-cyan-400 md:flex" />
              </Carousel>
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-300">
              No additional projects yet. Mark at least one project as
              non-featured in admin to show it here.
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
