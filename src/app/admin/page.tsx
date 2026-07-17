import { redirect } from 'next/navigation'

import { isAdminAuthenticated } from '@/lib/admin-auth'
import { getProjects } from '@/lib/projects'

import {
  deleteProjectAction,
  logoutAdminAction,
  saveProjectAction,
  setFeaturedProjectAction,
} from './actions'

import AdminCoverUploadField from '@/components/custom/admin-cover-upload-field'

export default async function AdminPage() {
  if (!(await isAdminAuthenticated())) {
    redirect('/admin/login')
  }

  const projects = await getProjects()

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs tracking-widest text-cyan-300 uppercase">
              Admin Panel
            </p>
            <h1 className="font-roboto text-3xl font-black">Manage Projects</h1>
          </div>

          <form action={logoutAdminAction}>
            <button
              className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-100 transition-colors hover:border-cyan-500 hover:text-cyan-300"
              type="submit"
            >
              Logout
            </button>
          </form>
        </div>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <h2 className="font-roboto text-lg font-bold">
            Create or Update Project
          </h2>

          <form
            action={saveProjectAction}
            className="mt-4 grid gap-4 md:grid-cols-2"
          >
            <input
              className="admin-input"
              name="id"
              placeholder="ID (leave empty to create)"
            />
            <input
              className="admin-input"
              name="title"
              placeholder="Title"
              required
            />
            <input
              className="admin-input"
              name="subtitle"
              placeholder="Subtitle"
            />
            <input
              className="admin-input"
              name="status"
              placeholder="Status"
              required
            />
            <input
              className="admin-input md:col-span-2"
              name="description"
              placeholder="Description"
              required
            />
            <input
              className="admin-input"
              min="0"
              name="displayOrder"
              placeholder="Display order"
              type="number"
            />
            <input
              className="admin-input"
              name="tagsCsv"
              placeholder="Tags comma separated"
            />
            <input
              className="admin-input"
              name="githubUrl"
              placeholder="GitHub URL"
            />
            <input
              className="admin-input"
              name="liveUrl"
              placeholder="Live URL"
            />
            <div className="md:col-span-2 space-y-2">
              <AdminCoverUploadField
                name="coverImageUrl"
                placeholder="Cover image URL (/images/... or S3 URL)"
                type="projects"
              />
            </div>

            <label className="inline-flex items-center gap-2 text-sm text-slate-300">
              <input name="featured" type="checkbox" /> Featured
            </label>

            <div className="md:col-span-2">
              <button
                className="inline-flex rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
                type="submit"
              >
                Save project
              </button>
            </div>
          </form>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <h2 className="font-roboto text-lg font-bold">Current Projects</h2>

          <div className="mt-4 space-y-4">
            {projects.map((project) => (
              <article
                className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                key={project.id}
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-slate-100">
                      {project.title}
                    </p>
                    <p className="text-xs text-slate-400">
                      {project.status}
                      {project.featured ? ' • Featured' : ''}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {!project.featured ? (
                      <form action={setFeaturedProjectAction}>
                        <input name="id" type="hidden" value={project.id} />
                        <button
                          className="inline-flex rounded-lg border border-cyan-500/40 px-3 py-1.5 text-xs font-semibold text-cyan-300 transition-colors hover:bg-cyan-500/10"
                          type="submit"
                        >
                          Set as Featured
                        </button>
                      </form>
                    ) : null}

                    <form action={deleteProjectAction}>
                      <input name="id" type="hidden" value={project.id} />
                      <button
                        className="inline-flex rounded-lg border border-rose-500/40 px-3 py-1.5 text-xs font-semibold text-rose-300 transition-colors hover:bg-rose-500/10"
                        type="submit"
                      >
                        Delete
                      </button>
                    </form>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
