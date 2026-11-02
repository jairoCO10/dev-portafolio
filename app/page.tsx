import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Github, Linkedin, ShieldCheck, Terminal, Bike, Moon, Database, ExternalLink } from 'lucide-react';

const projects = [
  { number: '01', title: 'SQL Diagram Editor', description: 'Un lienzo para pensar bases de datos antes de escribir una sola migración.', stack: 'React · TypeScript · Canvas', href: 'https://sql-diagram-editor-canvas.vercel.app/' },
  { number: '02', title: 'SQL Editor Interface', description: 'Una interfaz clara para trabajar con datos sin que la herramienta estorbe.', stack: 'React · Vite · Tailwind', href: 'https://sql-editor-interface.vercel.app/' },
  { number: '03', title: 'Sociedad Prosperar', description: 'Una web para una organización que convierte trabajo social en historias visibles.', stack: 'React · Vite · TypeScript', href: 'https://www.corporacionsociedadprosperar.com/' },
];

export default function Home() {
  return (
    <div className="portfolio-shell">
      <section className="hero-grid border-b border-white/10">
        <div className="hero-copy">
          <p className="eyebrow animate-rise"><span className="status-dot" /> Disponible para construir cosas difíciles</p>
          <h1 className="hero-title animate-rise delay-1">Código que aguanta<br /><em>la realidad.</em></h1>
          <p className="hero-intro animate-rise delay-2">Soy Jairo Cogollo, desarrollador backend colombiano. Diseño APIs, sistemas seguros y herramientas que hacen que lo complejo se sienta simple.</p>
          <div className="hero-actions animate-rise delay-3"><Link href="#proyectos" className="button button-primary">Ver proyectos <ArrowUpRight size={17} /></Link><a href="mailto:jairo.cogollo.dev@gmail.com" className="button button-quiet">Hablemos <span>↗</span></a></div>
          <div className="hero-signature animate-rise delay-3"><span>JCO / 2025—∞</span><span>Montería · Colombia</span></div>
        </div>
        <div className="hero-visual"><div className="visual-grid" /><div className="hero-portrait-wrap"><Image src="/IMG_6996.jpg" alt="Jairo Cogollo" fill priority sizes="(max-width: 768px) 80vw, 42vw" className="hero-portrait" /></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="visual-note note-top"><span>01</span> backend / seguridad</div><div className="visual-note note-bottom">mirar arriba también es parte<br />de hacer buen software <Moon size={15} /></div></div>
      </section>
      <section className="signal-strip" aria-label="Áreas de trabajo"><span><Terminal size={16} /> Python / PHP</span><span><ShieldCheck size={16} /> Secure by default</span><span><Database size={16} /> APIs & datos</span><span><Bike size={16} /> Ruta larga</span></section>
      <section className="section-block about-grid" id="sobre-mi"><div className="section-label">02 / sobre mí</div><div><h2>Ingeniería con<br /><span>curiosidad humana.</span></h2><p className="large-copy">Me gusta entender cómo se rompe algo antes de decidir cómo construirlo. Mi trabajo cruza desarrollo backend, seguridad informática y la paciencia de quien ajusta una moto hasta que suena bien.</p><p className="muted-copy">Fuera del editor: carreteras, fotografía de la Luna y proyectos tecnológicos que empiezan como una pregunta.</p></div></section>
      <section className="section-block projects-block" id="proyectos"><div className="section-heading"><div className="section-label">03 / trabajo seleccionado</div><p>Proyectos hechos para aprender<br />y dejar algo funcionando.</p></div><div className="project-list">{projects.map((project) => <a className="project-row" href={project.href} target="_blank" rel="noreferrer" key={project.number}><span className="project-number">{project.number}</span><div><h3>{project.title} <ExternalLink size={16} /></h3><p>{project.description}</p></div><span className="project-stack">{project.stack}</span></a>)}</div></section>
      <section className="section-block now-grid" id="enfoque"><div className="section-label">04 / ahora</div><div className="now-content"><div><h2>Construyendo sistemas<br /><span>más seguros.</span></h2></div><div className="focus-lines"><div><span>01</span><p>Arquitecturas cloud-native<br /><small>Docker · Linux · CI/CD</small></p></div><div><span>02</span><p>Seguridad aplicada<br /><small>Auth · APIs · datos sensibles</small></p></div><div><span>03</span><p>Aprender haciendo<br /><small>Una idea, un prototipo, una ruta</small></p></div></div></div></section>
      <section className="contact-block" id="contacto"><div><p className="eyebrow">¿Tienes un sistema que necesita orden?</p><h2>Hagamos que<br /><em>funcione bien.</em></h2></div><div className="contact-side"><p>Cuéntame qué estás construyendo, qué te preocupa o qué quieres aprender. Siempre hay una buena conversación detrás de un buen proyecto.</p><a className="button button-primary" href="mailto:jairo.cogollo.dev@gmail.com">Escribir a Jairo <ArrowUpRight size={17} /></a><div className="socials"><a href="https://github.com/jairoCO10" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a><a href="https://www.linkedin.com/in/jairo-cogollo/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a></div></div></section>
    </div>
  );
}
