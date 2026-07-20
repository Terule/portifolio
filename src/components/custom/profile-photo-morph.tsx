import Image from 'next/image'

interface ProfilePhotoMorphProps {
  src?: string
}

export default function ProfilePhotoMorph({ src }: ProfilePhotoMorphProps) {
  return (
    <div className="portrait-frame">
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
      <svg
        aria-hidden="true"
        className="portrait-frame__orbits"
        fill="none"
        viewBox="0 0 300 400"
      >
        <ellipse
          className="portrait-frame__orbit-line portrait-frame__orbit-line--outer"
          cx="150"
          cy="200"
          rx="142"
          ry="194"
        />
        <ellipse
          className="portrait-frame__orbit-line portrait-frame__orbit-line--inner"
          cx="150"
          cy="200"
          rx="130"
          ry="181"
        />
      </svg>
      <span className="portrait-frame__signature">RA / 01</span>
    </div>
  )
}
