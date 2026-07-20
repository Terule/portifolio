import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

import {
  getFeaturedProject,
  getNonFeaturedProjects,
  type Project,
} from '@/lib/projects'

import SiteFooter from '@/components/custom/site-footer'
import SiteHeader from '@/components/custom/site-header'

function ProjectTile({
  project,
  featured = false,
}: {
  project: Project
  featured?: boolean
}) {
  return (
    <article
      className={featured ? 'work-tile work-tile--featured' : 'work-tile'}
    >
      <div className="work-tile__visual">
        <Image
          alt={`${project.title} interface`}
          fill
          sizes={
            featured
              ? '(max-width: 900px) 100vw, 66vw'
              : '(max-width: 900px) 100vw, 33vw'
          }
          src={project.coverImageUrl ?? '/images/projects/fallback.svg'}
          unoptimized
        />
      </div>
      <div className="work-tile__content">
        <div className="work-tile__meta">
          <span>{project.status}</span>
          <span>{project.subtitle ?? 'Digital product'}</span>
        </div>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="work-tile__footer">
          <div>
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          {project.liveUrl || project.githubUrl ? (
            <a
              aria-label={`Open ${project.title}`}
              href={project.liveUrl ?? project.githubUrl ?? '#'}
              rel="noopener"
              target="_blank"
            >
              <ArrowUpRight aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}

export default async function ProjectsPage() {
  const [featuredProject, projects] = await Promise.all([
    getFeaturedProject(),
    getNonFeaturedProjects(),
  ])

  return (
    <div className="portfolio-page">
      <SiteHeader active="projects" />
      <main className="content-page">
        <section className="page-intro">
          <p className="eyebrow">Selected work</p>
          <h1>
            Useful by design.
            <br />
            Reliable by default.
          </h1>
          <p>
            A selection of systems built to replace friction with clarity—from
            operational tooling to focused product experiences.
          </p>
        </section>

        <section className="featured-work">
          <div className="section-label">
            <span>01</span> In focus
          </div>
          <ProjectTile featured project={featuredProject} />
        </section>

        <section className="work-list">
          <div className="section-label">
            <span>02</span> More explorations
          </div>
          <div className="work-list__grid">
            {projects.map((project) => (
              <ProjectTile key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
