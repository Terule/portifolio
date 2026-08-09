import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { identity, type Locale, type PortfolioContent } from "@/lib/portfolio";

type SiteHeaderProps = { locale: Locale; content: PortfolioContent };

export function SiteHeader({ locale, content }: SiteHeaderProps) {
  const alternateLocale = locale === "en" ? "pt" : "en";
  return <nav className="relative z-30 mx-auto flex max-w-7xl items-center justify-between"><a href="#top" className="group flex items-center gap-2 text-sm font-semibold tracking-tight" aria-label="Back to top"><span className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-[#22c55e] to-[#38bdf8] text-[#061a15] transition-transform duration-300 group-hover:rotate-12">R</span><span>RAFAEL.DEV</span></a><div className="hidden items-center gap-6 text-xs font-medium text-white/60 lg:flex">{content.navigation.map((item) => <a key={item.href} className="transition-colors hover:text-[#38bdf8]" href={item.href}>{item.label.toUpperCase()}</a>)}</div><div className="flex items-center gap-2"><Link href={`/${alternateLocale}`} className="rounded-md px-2 py-1 text-xs font-semibold text-white/65 transition-colors hover:bg-white/10 hover:text-[#38bdf8]" aria-label={`Switch language to ${alternateLocale === "en" ? "English" : "Portuguese"}`}>{alternateLocale.toUpperCase()}</Link><Button asChild variant="outline" size="sm" className="border-white/15 bg-white/5 text-white hover:bg-gradient-to-r hover:from-[#22c55e] hover:to-[#38bdf8] hover:text-[#061a15]"><a href={`mailto:${identity.email}`}>{content.hero.contactLabel} <ArrowUpRight data-icon="inline-end" /></a></Button></div></nav>;
}
