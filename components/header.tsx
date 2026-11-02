import Link from 'next/link';
import { Github, Linkedin, FileText } from 'lucide-react';

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="brand"><span className="brand-mark">J</span><span>Jairo Cogollo</span></Link>
        <nav className="main-nav" aria-label="Navegación principal">
          <Link href="#sobre-mi">Sobre mí</Link><Link href="#proyectos">Proyectos</Link><Link href="#enfoque">Enfoque</Link><Link href="#contacto">Contacto</Link>
        </nav>
        <div className="header-links"><a href="https://github.com/jairoCO10" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href="https://www.linkedin.com/in/jairo-cogollo/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="/CV-jco.pdf" target="_blank" rel="noreferrer" aria-label="Ver CV"><FileText size={17} /></a></div>
      </div>
    </header>
  );
}
