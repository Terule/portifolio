import { Pool } from 'pg'
import { z } from 'zod'

const profileSchema = z.object({
  photoUrl: z.string().nullable(),
})

const pool = process.env.DATABASE_URL
  ? new Pool({ connectionString: process.env.DATABASE_URL })
  : null

let profileTableEnsured = false

async function ensureProfileTable() {
  if (!pool || profileTableEnsured) {
    return
  }

  await pool.query(`
    CREATE TABLE IF NOT EXISTS profile_settings (
      id SMALLINT PRIMARY KEY CHECK (id = 1),
      photo_url TEXT,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `)
  profileTableEnsured = true
}

export async function getProfilePhotoUrl(): Promise<string | null> {
  if (!pool) {
    return null
  }

  try {
    await ensureProfileTable()
    const { rows } = await pool.query(
      'SELECT photo_url AS "photoUrl" FROM profile_settings WHERE id = 1',
    )
    return rows[0] ? profileSchema.parse(rows[0]).photoUrl : null
  } catch (error) {
    console.error('Failed to fetch profile photo.', error)
    return null
  }
}

export async function updateProfilePhotoUrl(photoUrl: string) {
  if (!pool) {
    throw new Error(
      'A database connection is required to save the profile photo.',
    )
  }

  await ensureProfileTable()
  await pool.query(
    `
      INSERT INTO profile_settings (id, photo_url)
      VALUES (1, $1)
      ON CONFLICT (id) DO UPDATE
      SET photo_url = EXCLUDED.photo_url, updated_at = NOW()
    `,
    [photoUrl || null],
  )
}
