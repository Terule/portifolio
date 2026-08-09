import { ArrowUpRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { identity, type PortfolioContent } from "@/lib/portfolio";

type ContactSectionProps = { content: PortfolioContent };

export function ContactSection({ content }: ContactSectionProps) {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-[#22c55e] via-[#14b8a6] to-[#38bdf8] px-5 py-20 text-[#061a15] sm:px-8 lg:px-12 lg:py-28">
      <Sparkles className="absolute right-[8%] top-10 size-28 opacity-20" />
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold tracking-[0.16em]">{content.contact.eyebrow}</p>
        <div className="mt-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-4xl text-5xl font-semibold leading-[0.88] tracking-[-0.075em] sm:text-7xl lg:text-8xl">{content.contact.title[0]}<br />{content.contact.title[1]}</h2>
          <Button asChild size="lg" className="h-14 rounded-full bg-[#061a15] px-6 text-white hover:bg-[#061a15]/80"><a href={`mailto:${identity.email}`}>{content.contact.action} <ArrowUpRight data-icon="inline-end" /></a></Button>
        </div>
      </div>
    </section>
  );
}
