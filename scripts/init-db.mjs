import { readFile } from 'node:fs/promises'
import pg from 'pg'

const { Client } = pg

const connectionString =
  process.env.DATABASE_URL ??
  'postgres://portifolio:portifolio@localhost:5432/portifolio'

async function main() {
  const client = new Client({ connectionString })
  await client.connect()

  const sql = await readFile(
    new URL('../docker/init.sql', import.meta.url),
    'utf8',
  )
  await client.query(sql)

  await client.end()
  console.log('Database initialized successfully.')
}

main().catch((error) => {
  console.error('Failed to initialize database.')
  console.error(error)
  process.exit(1)
})
