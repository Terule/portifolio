import { NextResponse } from 'next/server'

import { isAdminAuthenticated } from '@/lib/admin-auth'
import { uploadAsset } from '@/lib/storage'

const MAX_SIZE_MB = 8

export async function POST(request: Request) {
  try {
    if (!(await isAdminAuthenticated())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get('file')
    const type = String(formData.get('type') ?? 'projects')

    if (!(file instanceof File)) {
      return NextResponse.json({ error: 'Missing file' }, { status: 400 })
    }

    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'Only image uploads are supported.' },
        { status: 400 },
      )
    }

    const maxBytes = MAX_SIZE_MB * 1024 * 1024
    if (file.size > maxBytes) {
      return NextResponse.json(
        { error: `File too large. Max ${MAX_SIZE_MB}MB.` },
        { status: 400 },
      )
    }

    const bytes = new Uint8Array(await file.arrayBuffer())
    const prefix = type === 'profile' ? 'profile' : 'projects'

    const url = await uploadAsset({
      fileName: file.name,
      contentType: file.type,
      bytes,
      prefix,
    })

    return NextResponse.json({ url })
  } catch (error) {
    console.error('Failed to upload asset.', error)

    return NextResponse.json(
      { error: 'Unable to upload the image. Please try again.' },
      { status: 500 },
    )
  }
}
