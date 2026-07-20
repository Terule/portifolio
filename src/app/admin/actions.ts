'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { clearAdminSession, isAdminAuthenticated } from '@/lib/admin-auth'
import { updateProfilePhotoUrl } from '@/lib/profile'
import {
  removeProject,
  setFeaturedProject,
  upsertProject,
} from '@/lib/projects-admin'

export async function saveProfilePhotoAction(formData: FormData) {
  await setProfilePhotoAction(String(formData.get('photoUrl') ?? ''))
}

export async function setProfilePhotoAction(photoUrl: string) {
  if (!(await isAdminAuthenticated())) {
    redirect('/admin/login')
  }

  await updateProfilePhotoUrl(photoUrl)

  revalidatePath('/')
  revalidatePath('/admin')
}

export async function saveProjectAction(formData: FormData) {
  if (!(await isAdminAuthenticated())) {
    redirect('/admin/login')
  }

  await upsertProject({
    id: String(formData.get('id') ?? ''),
    title: String(formData.get('title') ?? ''),
    subtitle: String(formData.get('subtitle') ?? ''),
    description: String(formData.get('description') ?? ''),
    status: String(formData.get('status') ?? ''),
    featured: formData.get('featured') === 'on',
    displayOrder: Number(formData.get('displayOrder') ?? 0),
    githubUrl: String(formData.get('githubUrl') ?? ''),
    liveUrl: String(formData.get('liveUrl') ?? ''),
    coverImageUrl: String(formData.get('coverImageUrl') ?? ''),
    tagsCsv: String(formData.get('tagsCsv') ?? ''),
  })

  revalidatePath('/')
  revalidatePath('/projects')
  revalidatePath('/admin')
}

export async function deleteProjectAction(formData: FormData) {
  if (!(await isAdminAuthenticated())) {
    redirect('/admin/login')
  }

  await removeProject(String(formData.get('id') ?? ''))
  revalidatePath('/')
  revalidatePath('/projects')
  revalidatePath('/admin')
}

export async function setFeaturedProjectAction(formData: FormData) {
  if (!(await isAdminAuthenticated())) {
    redirect('/admin/login')
  }

  await setFeaturedProject(String(formData.get('id') ?? ''))
  revalidatePath('/')
  revalidatePath('/projects')
  revalidatePath('/admin')
}

export async function logoutAdminAction() {
  await clearAdminSession()
  redirect('/admin/login')
}
