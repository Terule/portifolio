'use client'

import { ExternalLink, Github, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { createPortal } from 'react-dom'

import { CarouselItem } from '../ui/carousel'

interface ProjectCardProps {
  title: string
  subtitle?: string | null
  description: string
  status?: string
  tags: string[]
  coverImageUrl?: string | null
  githubUrl?: string | null
  liveUrl?: string | null
}

function ProjectCard({
  title,
  subtitle,
  description,
  status,
  tags,
  coverImageUrl,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <CarouselItem className="md:basis-1/2 lg:basis-1/2">
        <button
          className="group relative flex h-full w-full overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/65 text-left shadow-lg shadow-slate-950/60 transition-all hover:-translate-y-1 hover:border-cyan-500/40"
          onClick={() => setIsOpen(true)}
          type="button"
        >
          <div className="relative h-56 w-full">
            <Image
              alt={`${title} cover`}
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 560px"
              src={coverImageUrl ?? '/images/projects/fallback.svg'}
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-slate-950 via-slate-950/70 to-transparent" />

          <div className="absolute left-4 right-4 bottom-4">
            <div className="mb-2 flex items-start justify-between gap-3">
              <div>
                <h3 className="font-roboto text-lg font-bold text-slate-100 transition-colors group-hover:text-cyan-300 md:text-xl">
                  {title}
                </h3>
                {subtitle ? (
                  <p className="text-xs text-slate-300/90 md:text-sm">
                    {subtitle}
                  </p>
                ) : null}
              </div>
              {status ? (
                <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-cyan-300 uppercase">
                  {status}
                </span>
              ) : null}
            </div>

            <p className="line-clamp-2 text-xs leading-relaxed text-slate-300 md:text-sm">
              {description}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag) => (
                <span
                  className="inline-flex items-center rounded-full border border-slate-700/70 bg-slate-950/60 px-2.5 py-1 text-[10px] text-slate-300"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </button>
      </CarouselItem>

      {isOpen
        ? createPortal(
            <div
              className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/75 p-4 backdrop-blur-sm md:items-center"
              onClick={(event) => {
                if (event.target === event.currentTarget) {
                  setIsOpen(false)
                }
              }}
              onKeyDown={(event) => {
                if (event.key === 'Escape') {
                  setIsOpen(false)
                }
              }}
              role="dialog"
              tabIndex={-1}
            >
              <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl shadow-slate-950/80">
                <button
                  aria-label="Close project details"
                  className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 text-slate-300 transition-colors hover:border-cyan-500 hover:text-cyan-300"
                  onClick={() => setIsOpen(false)}
                  type="button"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="relative h-64 w-full md:h-72">
                  <Image
                    alt={`${title} showcase`}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    src={coverImageUrl ?? '/images/projects/fallback.svg'}
                  />
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="font-roboto text-2xl font-black text-slate-100 md:text-3xl">
                        {title}
                      </h3>
                      {subtitle ? (
                        <p className="mt-1 text-slate-400">{subtitle}</p>
                      ) : null}
                    </div>
                    {status ? (
                      <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 uppercase">
                        {status}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
                    {description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        className="inline-flex items-center rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-xs text-slate-300"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {liveUrl ? (
                      <a
                        className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
                        href={liveUrl}
                        rel="noopener"
                        target="_blank"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Visit
                      </a>
                    ) : (
                      <span
                        aria-disabled="true"
                        className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-cyan-500/40 px-4 py-2 text-sm font-semibold text-slate-950/80"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Visit
                      </span>
                    )}

                    {githubUrl ? (
                      <a
                        className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/80 px-4 py-2 text-sm font-semibold text-slate-100 transition-colors hover:border-cyan-500 hover:text-cyan-300"
                        href={githubUrl}
                        rel="noopener"
                        target="_blank"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    ) : (
                      <span
                        aria-disabled="true"
                        className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-slate-700/60 bg-slate-950/40 px-4 py-2 text-sm font-semibold text-slate-300/70"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  )
}

export default ProjectCard
