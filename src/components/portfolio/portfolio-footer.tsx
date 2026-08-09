import { FileText, GitFork, Link, Mail } from "lucide-react";

import { identity, type PortfolioContent } from "@/lib/portfolio";

type PortfolioFooterProps = { content: PortfolioContent };

export function PortfolioFooter({ content }: PortfolioFooterProps) {
  return <footer className="px-5 py-6 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col gap-5 text-xs font-medium text-white/45 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} {identity.name.toUpperCase()} / {identity.alias.toUpperCase()}</p><div className="flex flex-wrap gap-5"><a className="flex items-center gap-1.5 hover:text-[#22c55e]" href={identity.githubUrl} target="_blank" rel="noreferrer"><GitFork className="size-3.5" />{content.footer.github}</a><a className="flex items-center gap-1.5 hover:text-[#38bdf8]" href={identity.linkedinUrl} target="_blank" rel="noreferrer"><Link className="size-3.5" />{content.footer.linkedin}</a><a className="flex items-center gap-1.5 hover:text-[#38bdf8]" href={identity.resumeUrl} target="_blank" rel="noreferrer"><FileText className="size-3.5" />{content.footer.resume}</a><a className="flex items-center gap-1.5 hover:text-[#22c55e]" href={`mailto:${identity.email}`}><Mail className="size-3.5" />{content.footer.email}</a></div></div></footer>;
}
