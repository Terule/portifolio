import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PortfolioPage } from "@/components/portfolio/portfolio-page";
import { content, isLocale, locales } from "@/lib/portfolio";

type LocalePageProps = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const localeContent = content[locale];
  return {
    title: localeContent.metadata.title,
    description: localeContent.metadata.description,
    alternates: { canonical: `/${locale}`, languages: { en: "/en", pt: "/pt", "x-default": "/en" } },
  };
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <PortfolioPage locale={locale} content={content[locale]} />;
}
