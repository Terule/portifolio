import { randomUUID } from 'node:crypto'
import { Pool } from 'pg'
import { z } from 'zod'

const updateSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  subtitle: z.string(),
  description: z.string().min(1),
  status: z.string().min(1),
  featured: z.boolean(),
  displayOrder: z.number(),
  githubUrl: z.string(),
  liveUrl: z.string(),
  coverImageUrl: z.string(),
  tagsCsv: z.string(),
})

const pool = process.env.DATABASE_URL
  ? new Pool({ connectionString: process.env.DATABASE_URL })
  : null

function getTags(tagsCsv: string) {
  return tagsCsv
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
}

function asNullable(value: string) {
  const trimmed = value.trim()
  return trimmed.length ? trimmed : null
}

export async function upsertProject(input: unknown) {
  if (!pool) {
    return
  }

  const data = updateSchema.parse(input)
  const id = data.id.trim() || randomUUID()

  const client = await pool.connect()

  try {
    await client.query('BEGIN')

    if (data.featured) {
      await client.query(
        'UPDATE projects SET featured = FALSE WHERE id <> $1',
        [id],
      )
    }

    await client.query(
      `
      INSERT INTO projects (
        id,
        title,
        subtitle,
        description,
        status,
        featured,
        display_order,
        github_url,
        live_url,
        cover_image_url,
        tags,
        updated_at
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11::jsonb, NOW())
      ON CONFLICT (id) DO UPDATE SET
        title = EXCLUDED.title,
        subtitle = EXCLUDED.subtitle,
        description = EXCLUDED.description,
        status = EXCLUDED.status,
        featured = EXCLUDED.featured,
        display_order = EXCLUDED.display_order,
        github_url = EXCLUDED.github_url,
        live_url = EXCLUDED.live_url,
        cover_image_url = EXCLUDED.cover_image_url,
        tags = EXCLUDED.tags,
        updated_at = NOW()
      `,
      [
        id,
        data.title,
        asNullable(data.subtitle),
        data.description,
        data.status,
        data.featured,
        data.displayOrder,
        asNullable(data.githubUrl),
        asNullable(data.liveUrl),
        asNullable(data.coverImageUrl),
        JSON.stringify(getTags(data.tagsCsv)),
      ],
    )

    await client.query('COMMIT')
  } catch (error) {
    await client.query('ROLLBACK')
    throw error
  } finally {
    client.release()
  }
}

export async function removeProject(id: string) {
  if (!pool || !id.trim()) {
    return
  }

  await pool.query('DELETE FROM projects WHERE id = $1', [id])
}

export async function setFeaturedProject(id: string) {
  if (!pool || !id.trim()) {
    return
  }

  const client = await pool.connect()

  try {
    await client.query('BEGIN')
    await client.query('UPDATE projects SET featured = FALSE')
    await client.query('UPDATE projects SET featured = TRUE WHERE id = $1', [
      id,
    ])
    await client.query('COMMIT')
  } catch (error) {
    await client.query('ROLLBACK')
    throw error
  } finally {
    client.release()
  }
}
