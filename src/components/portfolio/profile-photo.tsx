import { Camera } from "lucide-react";

type ProfilePhotoProps = { name: string; label: string };

export function ProfilePhoto({ name, label }: ProfilePhotoProps) {
  return <figure className="relative h-48 w-36 overflow-hidden rounded-2xl border border-white/20 bg-[#1b1b1b] shadow-2xl shadow-black/30" aria-label={`${name}'s profile photo`}><div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/profile.jpg')" }} /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-white/10" /><div className="relative flex h-full flex-col justify-between p-3"><span className="flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-[#22c55e] to-[#38bdf8] text-[#061a15]"><Camera className="size-3.5" /></span><figcaption><span className="block text-[0.6rem] font-medium tracking-[0.14em] text-white/65">{label}</span><span className="mt-0.5 block text-xs font-semibold text-white">{name}</span></figcaption></div></figure>;
}
