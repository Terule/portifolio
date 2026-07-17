import {
  CreateBucketCommand,
  HeadBucketCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3'

const bucketName = process.env.S3_BUCKET ?? 'portfolio-assets'

const endpoint = process.env.S3_ENDPOINT ?? 'http://localhost:8333'

const client = new S3Client({
  region: process.env.S3_REGION ?? 'us-east-1',
  endpoint,
  forcePathStyle: true,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY ?? 'seaweedfs',
    secretAccessKey: process.env.S3_SECRET_KEY ?? 'seaweedfs-secret',
  },
})

let bucketEnsured = false

async function ensureBucket() {
  if (bucketEnsured) {
    return
  }

  try {
    await client.send(new HeadBucketCommand({ Bucket: bucketName }))
  } catch {
    await client.send(new CreateBucketCommand({ Bucket: bucketName }))
  }

  bucketEnsured = true
}

export async function uploadAsset(params: {
  fileName: string
  contentType: string
  bytes: Uint8Array
  prefix: 'projects' | 'profile'
}) {
  await ensureBucket()

  const safeFileName = params.fileName.replace(/[^a-zA-Z0-9._-]/g, '-')
  const key = `${params.prefix}/${Date.now()}-${safeFileName}`

  await client.send(
    new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: params.bytes,
      ContentType: params.contentType,
      ACL: 'public-read',
    }),
  )

  return `${endpoint}/${bucketName}/${key}`
}
