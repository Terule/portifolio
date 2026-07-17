import { Pool } from 'pg'
import { z } from 'zod'

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string().nullable(),
  description: z.string(),
  status: z.string(),
  featured: z.boolean(),
  displayOrder: z.number().int(),
  githubUrl: z.string().nullable(),
  liveUrl: z.string().nullable(),
  coverImageUrl: z.string().nullable(),
  tags: z.array(z.string()),
})

export type Project = z.infer<typeof projectSchema>

const fallbackProjects: Project[] = [
  {
    id: 'fallback-dl-manager',
    title: 'DL Manager',
    subtitle: 'M365 Distribution Lists',
    description:
      'Microsoft 365 distribution list manager with owner-based access control and bulk member operations.',
    status: 'Shipping v1',
    featured: true,
    displayOrder: 1,
    githubUrl: 'https://github.com/Terule/dl-manager',
    liveUrl: null,
    coverImageUrl: '/images/projects/dl-manager.svg',
    tags: ['Next.js', 'TypeScript', 'Shadcn UI', 'Tailwind CSS', 'Biome'],
  },
  {
    id: 'fallback-finance-app',
    title: 'Finance App',
    subtitle: 'Personal Finance Platform',
    description:
      'Personal finance management platform focused on performance and expense tracking.',
    status: 'In Progress',
    featured: false,
    displayOrder: 2,
    githubUrl: null,
    liveUrl: null,
    coverImageUrl: '/images/projects/finance-app.svg',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    id: 'fallback-it-ops',
    title: 'IT Ops Automation',
    subtitle: 'Automation Suite',
    description:
      'Suite of scripts and workflows to automate user onboarding and AD auditing.',
    status: 'Operational',
    featured: false,
    displayOrder: 3,
    githubUrl: null,
    liveUrl: null,
    coverImageUrl: '/images/projects/it-ops.svg',
    tags: ['PowerShell', 'n8n'],
  },
]

const pool = process.env.DATABASE_URL
  ? new Pool({ connectionString: process.env.DATABASE_URL })
  : null

export async function getProjects(): Promise<Project[]> {
  if (!pool) {
    return fallbackProjects
  }

  try {
    const { rows } = await pool.query(
      `
      SELECT
        id,
        title,
        subtitle,
        description,
        status,
        featured,
        display_order AS "displayOrder",
        github_url AS "githubUrl",
        live_url AS "liveUrl",
        cover_image_url AS "coverImageUrl",
        tags
      FROM projects
      ORDER BY display_order ASC
      `,
    )

    return z.array(projectSchema).parse(rows)
  } catch (error) {
    console.error(
      'Failed to fetch projects from database, using fallback.',
      error,
    )
    return fallbackProjects
  }
}

export async function getFeaturedProject(): Promise<Project> {
  const projects = await getProjects()
  const featured = projects.find((project) => project.featured)
  return featured ?? projects[0]
}

export async function getNonFeaturedProjects(): Promise<Project[]> {
  const projects = await getProjects()
  return projects.filter((project) => !project.featured)
}
