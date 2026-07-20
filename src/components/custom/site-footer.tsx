import { SiGithub, SiLinkedin } from 'react-icons/si'

export default function SiteFooter() {
  return (
    <footer className="portfolio-footer">
      <p>© {new Date().getFullYear()} Rafael Aguiar</p>
      <div>
        <a
          aria-label="Rafael on GitHub"
          href="https://github.com/Terule"
          rel="noopener"
          target="_blank"
        >
          <SiGithub />
        </a>
        <a
          aria-label="Rafael on LinkedIn"
          href="https://linkedin.com/in/aguiar-fael"
          rel="noopener"
          target="_blank"
        >
          <SiLinkedin />
        </a>
      </div>
      <p>Built with intent in Brazil.</p>
    </footer>
  )
}
