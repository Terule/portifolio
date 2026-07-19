import { NextResponse } from 'next/server'

import { getAsset } from '@/lib/storage'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ key: string[] }> },
) {
  const { key } = await params

  if (!key.length || key.some((part) => part === '.' || part === '..')) {
    return new NextResponse(null, { status: 400 })
  }

  try {
    const asset = await getAsset(key.join('/'))

    if (!asset) {
      return new NextResponse(null, { status: 404 })
    }

    return new NextResponse(Uint8Array.from(asset.bytes).buffer, {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Content-Type': asset.contentType,
      },
    })
  } catch {
    return new NextResponse(null, { status: 404 })
  }
}
