import Image from 'next/image'

interface ProfilePhotoMorphProps {
  src?: string
}

export default function ProfilePhotoMorph({ src }: ProfilePhotoMorphProps) {
  return (
    <div className="portrait-frame">
      <div className="portrait-frame__orbit" />
      <div className="portrait-frame__arch">
        <Image
          alt="Portrait of Rafael Aguiar"
          className="portrait-frame__image"
          fill
          priority
          sizes="(max-width: 768px) 320px, 440px"
          src={src || '/images/profile-placeholder.svg'}
          unoptimized
        />
      </div>
      <span className="portrait-frame__signature">RA / 01</span>
    </div>
  )
}
