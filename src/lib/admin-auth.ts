import { cookies } from 'next/headers'

const ADMIN_SESSION_COOKIE = 'admin-session'

function getAdminSessionSecret() {
  return process.env.BETTER_AUTH_SECRET ?? 'dev-secret'
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies()
  const current = cookieStore.get(ADMIN_SESSION_COOKIE)?.value
  if (!current) {
    return false
  }

  return current === getAdminSessionSecret()
}

export async function setAdminSession() {
  const cookieStore = await cookies()
  cookieStore.set(ADMIN_SESSION_COOKIE, getAdminSessionSecret(), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24,
  })
}

export async function clearAdminSession() {
  const cookieStore = await cookies()
  cookieStore.delete(ADMIN_SESSION_COOKIE)
}

export function validateAdminCredentials(email: string, password: string) {
  const adminEmail = process.env.ADMIN_EMAIL
  const adminPassword = process.env.ADMIN_PASSWORD

  if (!adminEmail || !adminPassword) {
    return false
  }

  return email === adminEmail && password === adminPassword
}
