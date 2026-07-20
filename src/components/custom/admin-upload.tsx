'use client'

import { useState } from 'react'

type UploadType = 'projects' | 'profile'

interface AdminUploadProps {
  type: UploadType
  onUploaded: (url: string) => void | Promise<void>
}

export default function AdminUpload({ type, onUploaded }: AdminUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selected = event.target.files?.[0]
    if (!selected) {
      return
    }

    setError(null)
    setIsUploading(true)

    try {
      const body = new FormData()
      body.append('file', selected)
      body.append('type', type)

      const response = await fetch('/api/admin/upload', {
        method: 'POST',
        body,
      })

      const payload = await response.json().catch(() => null)

      if (!response.ok) {
        throw new Error(payload?.error ?? 'Upload failed')
      }

      if (!payload?.url) {
        throw new Error(
          'Upload failed: the server did not return an image URL.',
        )
      }

      await onUploaded(payload.url)
    } catch (uploadError) {
      setError(
        uploadError instanceof Error ? uploadError.message : 'Upload failed',
      )
    } finally {
      setIsUploading(false)
      event.target.value = ''
    }
  }

  return (
    <div className="space-y-2">
      <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs font-semibold text-slate-200 transition-colors hover:border-cyan-500 hover:text-cyan-300">
        {isUploading ? 'Uploading...' : 'Upload image'}
        <input
          accept="image/*"
          className="hidden"
          disabled={isUploading}
          onChange={handleChange}
          type="file"
        />
      </label>

      {error ? <p className="text-xs text-rose-300">{error}</p> : null}
    </div>
  )
}
