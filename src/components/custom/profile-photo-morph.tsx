import Image from 'next/image'

interface ProfilePhotoMorphProps {
  src?: string
}

export default function ProfilePhotoMorph({ src }: ProfilePhotoMorphProps) {
  return (
    <div className="morph-frame">
      <div className="morph-outline" />
      <div className="morph-image-wrap">
        <Image
          alt="Portrait of Rafael Aguiar"
          className="morph-image"
          fill
          sizes="(max-width: 768px) 260px, 320px"
          src={src || '/images/profile-placeholder.svg'}
          unoptimized
        />
      </div>
      <div className="morph-shade" />
      <div className="morph-grain" />
    </div>
  )
}
