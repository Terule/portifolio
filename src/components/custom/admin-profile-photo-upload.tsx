'use client'

import { X } from 'lucide-react'
import Image from 'next/image'
import { useState, useTransition } from 'react'

import AdminUpload from './admin-upload'

import { setProfilePhotoAction } from '@/app/admin/actions'
import { Button } from '@/components/ui/button'

interface AdminProfilePhotoUploadProps {
  defaultValue?: string
}

export default function AdminProfilePhotoUpload({
  defaultValue = '',
}: AdminProfilePhotoUploadProps) {
  const [photoUrl, setPhotoUrl] = useState(defaultValue)
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  async function savePhoto(url: string) {
    const previousPhotoUrl = photoUrl
    setError(null)
    setPhotoUrl(url)

    try {
      await setProfilePhotoAction(url)
    } catch (saveError) {
      setPhotoUrl(previousPhotoUrl)
      setError(
        saveError instanceof Error
          ? saveError.message
          : 'Unable to save the profile photo.',
      )
    }
  }

  function removePhoto() {
    startTransition(async () => {
      await savePhoto('')
    })
  }

  return (
    <div className="flex flex-col gap-3">
      {photoUrl ? (
        <div className="relative aspect-[4/3] max-w-sm overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
          <Image
            alt="Current profile photo"
            className="object-cover"
            fill
            sizes="(max-width: 640px) 100vw, 384px"
            src={photoUrl}
            unoptimized
          />
          <Button
            aria-label="Remove profile photo"
            className="absolute right-3 top-3 rounded-full border border-slate-600 bg-slate-950/90 text-slate-100 hover:bg-rose-500 hover:text-white"
            disabled={isPending}
            onClick={removePhoto}
            size="icon-sm"
            type="button"
            variant="ghost"
          >
            <X data-icon="inline-start" />
          </Button>
        </div>
      ) : null}

      <AdminUpload onUploaded={savePhoto} type="profile" />

      <p className="text-xs text-slate-500">
        {photoUrl
          ? 'Saved profile photo. Upload another image to replace it.'
          : 'Upload a portrait to show it on the home page.'}
      </p>

      {error ? <p className="text-xs text-rose-300">{error}</p> : null}
    </div>
  )
}
