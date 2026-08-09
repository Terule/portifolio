import { ApproachSection } from "@/components/portfolio/approach-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { HeroSection } from "@/components/portfolio/hero-section";
import { PortfolioFooter } from "@/components/portfolio/portfolio-footer";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SiteHeader } from "@/components/portfolio/site-header";
import type { Locale, PortfolioContent } from "@/lib/portfolio";

type PortfolioPageProps = { locale: Locale; content: PortfolioContent };

export function PortfolioPage({ locale, content }: PortfolioPageProps) {
  return <main className="overflow-hidden bg-[#0a0a0a] text-[#f4f2ed]"><HeroSection content={content} header={<SiteHeader locale={locale} content={content} />} /><ApproachSection content={content} /><ExperienceSection content={content} /><ProjectsSection content={content} /><ContactSection content={content} /><PortfolioFooter content={content} /></main>;
}
