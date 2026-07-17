import Image from 'next/image'

export default function ProfilePhotoMorph() {
  return (
    <div className="morph-frame">
      <div className="morph-outline" />
      <div className="morph-image-wrap">
        <Image
          alt="Portrait placeholder for Rafael Aguiar"
          className="morph-image"
          fill
          sizes="(max-width: 768px) 260px, 320px"
          src="/images/profile-placeholder.svg"
        />
      </div>
      <div className="morph-shade" />
      <div className="morph-grain" />
    </div>
  )
}
