import { loginAdmin } from './actions'

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-slate-100">
      <div className="mx-auto max-w-md rounded-2xl border border-slate-800 bg-slate-900/70 p-8">
        <p className="text-xs tracking-widest text-cyan-300 uppercase">
          Secret Login
        </p>
        <h1 className="mt-2 font-roboto text-3xl font-black">Admin Access</h1>
        <p className="mt-3 text-sm text-slate-400">
          Restricted area for project content management.
        </p>

        <form action={loginAdmin} className="mt-6 space-y-4">
          <label className="block">
            <span className="mb-1 block text-xs text-slate-400 uppercase">
              Email
            </span>
            <input
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none ring-cyan-400/40 focus:ring"
              name="email"
              required
              type="email"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-xs text-slate-400 uppercase">
              Password
            </span>
            <input
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none ring-cyan-400/40 focus:ring"
              name="password"
              required
              type="password"
            />
          </label>

          <button
            className="inline-flex w-full items-center justify-center rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
    </main>
  )
}
