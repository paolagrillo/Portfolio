"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaBootstrap,
  FaWordpress,
  FaFigma,
  FaPalette
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss
} from "react-icons/si";


export default function Page() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<"lavoro" | "studio">("lavoro");

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // Dati per la timeline di lavoro
  const lavoroTimeline = [
    {
      periodo: "2024",
      ruolo: "Graphic Designer Intern",
      azienda: "Content is King · Varedo",
      descrizione: "Gestione social, creazione contenuti, SEO e utilizzo di Adobe Illustrator.",
      skills: ["Graphic Design", "SEO", "Adobe Illustrator", "Social Media"]
    },
    {
      periodo: "2022 — 2023",
      ruolo: "Security Officer",
      azienda: "G.S.A. Milano",
      descrizione: "Gestione accessi e controllo della sicurezza.",
      skills: ["Gestione Accessi", "Sicurezza"]
    },
    {
      periodo: "2022",
      ruolo: "Brand Ambassador",
      azienda: "CPM Limbiate",
      descrizione: "Marketing, promozione prodotti e gestione lead.",
      skills: ["Marketing", "Promozione", "Lead Generation"]
    },
    {
      periodo: "2021 — 2022",
      ruolo: "Promoter Vendite",
      azienda: "Dugnano Next Step",
      descrizione: "Vendita e gestione della clientela.",
      skills: ["Vendita", "Gestione Clienti"]
    }
  ];

  // Dati per la timeline di studio
  const studioTimeline = [
     {
      periodo: "2026",
      ruolo: "React Developer",
      azienda: "BCSoft",
      descrizione: "Formazione pratica su UI/UX, HTML5, CSS3, JavaScript e React.",
      skills: ["UI/UX", "HTML5", "CSS3", "JavaScript", "React"]
    },
    {
      periodo: "2024",
      ruolo: "Web Design",
      azienda: "ETASS",
      descrizione: "Sviluppo Web, WordPress, SEO e Digital Marketing.",
      skills: ["Sviluppo Web", "WordPress", "SEO", "Digital Marketing"]
    },
    {
      periodo: "2022 — 2023",
      ruolo: "Web Developer",
      azienda: "AULAB",
      descrizione: "Sviluppo front-end con focalizzazione su HTML5, CSS3 e JavaScript.",
      skills: ["HTML5", "CSS3", "JavaScript"]
    },
   
    {
      periodo: "2016 — 2020",
      ruolo: "Diploma in Grafica e Comunicazione",
      azienda: "C.E. Gadda",
      descrizione: "Studio di Adobe Suite, progettazione grafica e comunicazione visiva.",
      skills: ["Adobe Suite", "Progettazione Grafica", "Comunicazione Visiva"]
    }
  ];

  const currentTimeline = activeTab === "lavoro" ? lavoroTimeline : studioTimeline;

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-bg-main text-text-main font-sans selection:bg-accent selection:text-bg-main"
    >
      {/* Sfondo Tech Grid */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '24px 24px, 48px 48px, 48px 48px'
        }}
      />

      {/* Raggio di luce Spotlight dinamico */}
      <div
        className="pointer-events-none fixed -inset-px z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--accent-color), transparent 80%)`,
          opacity: 0.15
        }}
      />

      {/* Contenitore Principale */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="lg:flex lg:justify-between lg:gap-8">
          
          {/* COLONNA SINISTRA */}
          <div className="lg:w-4/12 xl:w-3/12 lg:sticky lg:top-0 lg:h-screen lg:pr-4">
            <header className="flex h-full flex-col justify-between lg:py-24 py-12">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-text-main sm:text-5xl">
                  Paola Grillo
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-accent sm:text-xl">
                  Frontend Developer & UI/UX Designer
                </h2>
                <p className="mt-4 max-w-xs leading-normal text-text-main">
                  Sviluppo interfacce web moderne, interattive e curate nei minimi dettagli.
                </p>

                {/* Navigazione Sidebar */}
                <nav className="nav hidden lg:block mt-12" aria-label="Navigazione principale">
                  <ul className="flex flex-col gap-3.5 max-w-[220px]">
                    <li>
                      <Link 
                        href="/"
                        className="group flex items-center justify-between rounded-lg border border-border-custom bg-bg-card px-4 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-text-main shadow-sm hover:border-accent hover:text-accent transition-colors"
                      >
                        <span>Home</span>
                        <span className="rounded bg-bg-main px-1.5 py-0.5 text-[10px] text-text-main">
                          01
                        </span>
                      </Link>
                    </li>
                    <li>
                      <a 
                        href="#about"
                        className="group flex items-center justify-between rounded-lg border border-accent bg-bg-card px-4 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-accent shadow-sm"
                      >
                        <span>Chi Sono</span>
                        <span className="rounded bg-accent px-1.5 py-0.5 text-[10px] font-bold text-bg-main">
                          02
                        </span>
                      </a>
                    </li>
                    <li>
                      <Link 
                        href="/progetti"
                        className="group flex items-center justify-between rounded-lg border border-border-custom bg-bg-card px-4 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-text-main shadow-sm hover:border-accent hover:text-accent transition-colors"
                      >
                        <span>Progetti</span>
                        <span className="rounded bg-bg-main px-1.5 py-0.5 text-[10px] text-text-main">
                          03
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/contatti"
                        className="group flex items-center justify-between rounded-lg border border-border-custom bg-bg-card px-4 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-text-main shadow-sm hover:border-accent hover:text-accent transition-colors"
                      >
                        <span>Contatti</span>
                        <span className="rounded bg-bg-main px-1.5 py-0.5 text-[10px] text-text-main">
                          04
                        </span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Social Link */}
            <div className="mt-8 flex items-center gap-3 text-text-main">
                <a href="https://github.com/paolagrillo/" target="_blank" rel="noreferrer" aria-label="Profilo GitHub" className="group rounded-lg border border-border-custom bg-bg-card p-2.5 hover:border-accent/50 hover:bg-bg-card transition-all">
                  <svg className="w-5 h-5 fill-current group-hover:text-accent group-hover:scale-110 transition-all" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a href="http://www.linkedin.com/in/paolagrillo-dev" target="_blank" rel="noreferrer" aria-label="Profilo LinkedIn" className="group rounded-lg border border-border-custom bg-bg-card p-2.5 hover:border-accent/50 hover:bg-bg-card transition-all">
                  <svg className="w-5 h-5 fill-current group-hover:text-accent group-hover:scale-110 transition-all" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                  </svg>
                </a>


                {/*
                <a href="https://codepen.io" target="_blank" rel="noreferrer" aria-label="Profilo CodePen" className="group relative rounded-lg border border-border-custom bg-bg-card p-2.5 hover:border-accent/50 hover:bg-bg-card transition-all">
                  <svg className="w-5 h-5 fill-none stroke-current stroke-[2] group-hover:text-accent group-hover:scale-110 transition-all" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                    <line x1="12" y1="22" x2="12" y2="15.5" />
                    <polyline points="22 8.5 12 15.5 2 8.5" />
                    <polyline points="2 15.5 12 8.5 22 15.5" />
                    <line x1="12" y1="2" x2="12" y2="8.5" />
                  </svg>
                </a>


*/}

                <a href="https://vercel.com/paolagrillo1" target="_blank" rel="noreferrer" aria-label="Progetti su Vercel" className="group rounded-lg border border-border-custom bg-bg-card p-2.5 hover:border-accent/50 hover:bg-bg-card transition-all">
                  <svg className="w-5 h-5 fill-current group-hover:text-accent group-hover:scale-110 transition-all" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 1L24 22H0L12 1Z" />
                  </svg>
                </a>
              </div>
            </header>
          </div>

          {/* COLONNA DESTRA */}
          <main id="content" className="pt-24 lg:w-8/12 xl:w-9/12 lg:py-24 lg:pl-12 lg:border-l lg:border-border-custom space-y-24">
           
            {/* CHI SONO */}
            <section id="about" className="scroll-mt-16 md:scroll-mt-24">
              <h3 className="text-sm font-mono uppercase tracking-widest text-accent mb-8">
                Chi sono
              </h3>
              
              <div className="mb-6 overflow-hidden rounded-xl border border-border-custom bg-bg-card p-2 max-w-xs">
                <Image 
                  src="/profile.jpg" 
                  alt="Paola Grillo" 
                  width={300} 
                  height={300} 
                  priority
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>

              <div className="space-y-3 text-text-main leading-relaxed font-sans">
                <p>
                  Ho iniziato il mio percorso nel mondo della Grafica e della Comunicazione, sviluppando fin da subito una forte attenzione per il design, la creatività e la cura dei dettagli. Nel tempo ho scoperto un interesse sempre più forte per il mondo dello sviluppo web, intraprendendo un percorso di formazione che mi ha permesso di avvicinarmi alla programmazione e alla realizzazione di interfacce digitali.
                </p>
                <p>
                  Mi piace trasformare idee e concetti in siti web moderni, responsive e curati nei dettagli, unendo creatività e codice. Credo che un buon sito non debba essere solo esteticamente piacevole, ma anche intuitivo, funzionale e capace di offrire una buona esperienza a chi lo utilizza.
                </p>
                <p>
                  Sono all'inizio del mio percorso professionale e considero ogni progetto un'occasione per imparare, sperimentare e migliorare. Il mio obiettivo è continuare a crescere nel mondo dello sviluppo frontend, mettendo insieme la mia sensibilità per il design e la passione per il web.
                </p>
              </div>

              <a 
                href="/PaolaGrillocv.pdf" 
                download 
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border-custom bg-bg-card px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-text-main hover:border-accent/50 hover:text-accent transition-all"
              >
                <span>Scarica CV</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
              </a>
            </section>




{/* FRONTEND */}
<section id="skills-frontend" className="scroll-mt-16 md:scroll-mt-24">
  <h3 className="text-sm font-mono uppercase tracking-widest text-accent mb-6">
    FRONTEND
  </h3>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">


  <div className="flex items-center gap-3 rounded-lg border border-border-custom bg-bg-card p-3 hover:border-accent/40 transition-colors">
  <FaHtml5 className="w-5 h-5 text-[#E34F26]" />
  <span className="font-mono text-xs text-text-main">HTML5</span>
</div>

<div className="flex items-center gap-3 rounded-lg border border-border-custom bg-bg-card p-3 hover:border-accent/40 transition-colors">
  <FaCss3Alt className="w-5 h-5 text-[#1572B6]" />
  <span className="font-mono text-xs text-text-main">CSS3</span>
</div>

<div className="flex items-center gap-3 rounded-lg border border-border-custom bg-bg-card p-3 hover:border-accent/40 transition-colors">
  <FaJs className="w-5 h-5 text-[#F7DF1E]" />
  <span className="font-mono text-xs text-text-main">JavaScript</span>
</div>

<div className="flex items-center gap-3 rounded-lg border border-border-custom bg-bg-card p-3 hover:border-accent/40 transition-colors">
  <FaReact className="w-5 h-5 text-[#61DAFB]" />
  <span className="font-mono text-xs text-text-main">React</span>
</div>

<div className="flex items-center gap-3 rounded-lg border border-border-custom bg-bg-card p-3 hover:border-accent/40 transition-colors">
  <SiTypescript className="w-5 h-5 text-[#3178C6]" />
  <span className="font-mono text-xs text-text-main">TypeScript</span>
</div>

<div className="flex items-center gap-3 rounded-lg border border-border-custom bg-bg-card p-3 hover:border-accent/40 transition-colors">
  <SiNextdotjs className="w-5 h-5 text-text-main" />
  <span className="font-mono text-xs text-text-main">Next.js</span>
</div>

  </div>
</section>




{/* TOOLS & DEVELOPMENT */}
<section id="skills-tools" className="scroll-mt-16 md:scroll-mt-24">
  <h3 className="text-sm font-mono uppercase tracking-widest text-accent mb-6">
    TOOLS & DEVELOPMENT
  </h3>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">


  <div className="flex items-center gap-3 rounded-lg border border-border-custom bg-bg-card p-3 hover:border-accent/40 transition-colors">
  <FaGitAlt className="w-5 h-5 text-[#F03C2E]" />
  <span className="font-mono text-xs text-text-main">Git</span>
</div>


  <div className="flex items-center gap-3 rounded-lg border border-border-custom bg-bg-card p-3 hover:border-accent/40 transition-colors">
  <FaGithub className="w-5 h-5 text-[#ffffff]" />
  <span className="font-mono text-xs text-text-main">GitHub</span>
</div>
  

    <div className="flex items-center gap-3 rounded-lg border border-border-custom bg-bg-card p-3 hover:border-accent/40 transition-colors">
  <FaNodeJs className="w-5 h-5 text-[#5FA04E]" />
  <span className="font-mono text-xs text-text-main">Node.js</span>
</div>
 
      <div className="flex items-center gap-3 rounded-lg border border-border-custom bg-bg-card p-3 hover:border-accent/40 transition-colors">
  <FaBootstrap className="w-5 h-5 text-[#7952B3]" />
  <span className="font-mono text-xs text-text-main">Bootstrap</span>
</div>
   
     <div className="flex items-center gap-3 rounded-lg border border-border-custom bg-bg-card p-3 hover:border-accent/40 transition-colors">
  <FaWordpress className="w-5 h-5 text-[#21759B]" />
  <span className="font-mono text-xs text-text-main">WordPress</span>
</div>
   

   <div className="flex items-center gap-3 rounded-lg border border-border-custom bg-bg-card p-3 hover:border-accent/40 transition-colors">
  <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" />
  <span className="font-mono text-xs text-text-main">Tailwind CSS</span>
</div>

  </div>
</section>


{/* DESIGN */}
<section id="skills-design" className="scroll-mt-16 md:scroll-mt-24">
  <h3 className="text-sm font-mono uppercase tracking-widest text-accent mb-6">
    DESIGN
  </h3>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">

    {/* Figma */}
    <div className="flex items-center gap-3 rounded-lg border border-border-custom bg-bg-card p-3 hover:border-accent/40 transition-colors">
      <FaFigma className="w-5 h-5 text-[#F24E1E]" />
      <span className="font-mono text-xs text-text-main">Figma</span>
    </div>

    {/* Canva */}
    <div className="flex items-center gap-3 rounded-lg border border-border-custom bg-bg-card p-3 hover:border-accent/40 transition-colors">
      <img src="https://freelogopng.com/images/all_img/1656733637logo-canva-png.png" alt="Canva" className="w-5 h-5" />
      <span className="font-mono text-xs text-text-main">Canva</span>
    </div>

    {/* Adobe Illustrator */}
    <div className="flex items-center gap-3 rounded-lg border border-border-custom bg-bg-card p-3 hover:border-accent/40 transition-colors">
      <img src="https://logos-download.com/wp-content/uploads/2020/06/Adobe_Illustrator_Logo.png" alt="Adobe Illustrator" className="w-5 h-5" />
      <span className="font-mono text-xs text-text-main">Adobe Illustrator</span>
    </div>

  </div>
</section>

            {/* PERCORSO TIMELINE */}
            <section id="percorso" className="scroll-mt-16 md:scroll-mt-24">
              <h3 className="text-sm font-mono uppercase tracking-widest text-accent mb-8">
                Il mio percorso
              </h3>
            
              {/* Switch del Tab */}
              <div className="flex gap-4 mb-10 border-b border-border-custom pb-4">
                <button
                  onClick={() => setActiveTab("lavoro")}
                  className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-lg transition-all ${
                    activeTab === "lavoro"
                      ? "border border-accent bg-bg-card text-accent shadow-sm"
                      : "border border-border-custom bg-bg-card text-text-main hover:border-accent/50 hover:text-accent"
                  }`}
                >
                  Lavoro
                </button>
                <button
                  onClick={() => setActiveTab("studio")}
                  className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-lg transition-all ${
                    activeTab === "studio"
                      ? "border border-accent bg-bg-card text-accent shadow-sm"
                      : "border border-border-custom bg-bg-card text-text-main hover:border-accent/50 hover:text-accent"
                  }`}
                >
                  Studio
                </button>
              </div>

              {/* Timeline Dinamica */}
              <div className="relative border-l border-border-custom pl-6 space-y-10 ml-2">
                {currentTimeline.map((item, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full border border-accent bg-bg-main group-hover:bg-accent transition-colors" />
                    
                    <span className="font-mono text-xs text-accent">
                      {item.periodo}
                    </span>
                    <h4 className="text-base font-semibold text-text-main mt-1">
                      {item.ruolo} · <span className="text-text-main">{item.azienda}</span>
                    </h4>
                    <p className="mt-2 text-sm text-text-main leading-relaxed">
                      {item.descrizione}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.skills.map((skill, sIndex) => (
                        <span key={sIndex} className="font-mono text-[11px] text-text-main bg-bg-card border border-border-custom px-2 py-0.5 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

          

 <section>
  {/* FAQ rapide per Recruiter */}
  <div className="space-y-4">
    <h3 className="text-sm font-mono uppercase tracking-widest text-accent mb-8">
      FAQ Rapide
    </h3>

    <div className="grid gap-3 font-mono text-xs">
      
      {/* FAQ 1: Interesse per il web */}
      <details className="group rounded-xl border border-border-custom bg-bg-card p-4 transition-all duration-200 hover:border-accent/50 open:border-accent/50 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-text-main transition-colors group-hover:text-accent">
          <span>Da dove nasce il tuo interesse per il web?</span>
          <svg 
            className="h-4 w-4 shrink-0 text-text-sub transition-transform duration-200 group-open:rotate-180 group-hover:text-accent" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <p className="mt-3 font-sans leading-relaxed text-text-sub">
          Il mio percorso è iniziato nel mondo della Grafica e della Comunicazione, dove ho sviluppato una forte attenzione per il design e la cura dei dettagli. Successivamente ho scoperto un interesse sempre maggiore per lo sviluppo web, iniziando a unire la componente visiva alla programmazione.
        </p>
      </details>

      {/* FAQ 2: Scelta */}
      <details className="group rounded-xl border border-border-custom bg-bg-card p-4 transition-all duration-200 hover:border-accent/50 open:border-accent/50 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-text-main transition-colors group-hover:text-accent">
          <span>Perché hai scelto di orientarti verso il Frontend Development?</span>
          <svg 
            className="h-4 w-4 shrink-0 text-text-sub transition-transform duration-200 group-open:rotate-180 group-hover:text-accent" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <p className="mt-3 font-sans leading-relaxed text-text-sub">
Perché mi permette di unire due aspetti che mi appassionano: la creatività e la tecnologia. Mi piace trasformare un'idea visiva in un'interfaccia reale, funzionale, responsive e piacevole da utilizzare.
        </p>
      </details>

      {/* FAQ 3: approccio */}
      <details className="group rounded-xl border border-border-custom bg-bg-card p-4 transition-all duration-200 hover:border-accent/50 open:border-accent/50 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-text-main transition-colors group-hover:text-accent">
          <span>Come descriveresti il tuo approccio al design e allo sviluppo?</span>
          <svg 
            className="h-4 w-4 shrink-0 text-text-sub transition-transform duration-200 group-open:rotate-180 group-hover:text-accent" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <p className="mt-3 font-sans leading-relaxed text-text-sub">
Cerco di mantenere un equilibrio tra estetica, usabilità e funzionalità. Per me un'interfaccia non deve essere soltanto bella, ma anche intuitiva, accessibile e coerente con l'esperienza che deve offrire all'utente.
        </p>
      </details>

      {/* FAQ 4: obiettivo professionale */}
      <details className="group rounded-xl border border-border-custom bg-bg-card p-4 transition-all duration-200 hover:border-accent/50 open:border-accent/50 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-text-main transition-colors group-hover:text-accent">
          <span>Qual è il tuo obiettivo professionale?</span>
          <svg 
            className="h-4 w-4 shrink-0 text-text-sub transition-transform duration-200 group-open:rotate-180 group-hover:text-accent" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <p className="mt-3 font-sans leading-relaxed text-text-sub">
Il mio obiettivo è crescere nel mondo dello sviluppo frontend, consolidando le mie competenze tecniche e continuando a valorizzare la mia formazione nel design. Voglio costruire esperienza attraverso progetti concreti e il confronto con professionisti del settore.
        </p>
      </details>

      {/* FAQ 5: Difficoltà */}
      <details className="group rounded-xl border border-border-custom bg-bg-card p-4 transition-all duration-200 hover:border-accent/50 open:border-accent/50 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-text-main transition-colors group-hover:text-accent">
          <span>Come affronti un progetto quando devi imparare qualcosa di nuovo?</span>
          <svg 
            className="h-4 w-4 shrink-0 text-text-sub transition-transform duration-200 group-open:rotate-180 group-hover:text-accent" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <p className="mt-3 font-sans leading-relaxed text-text-sub">
          Considero ogni progetto un'occasione per imparare e sperimentare. Quando incontro una tecnologia o uno strumento nuovo, cerco di studiarne il funzionamento, applicarlo concretamente e trasformare ciò che imparo in esperienza pratica.
        </p>
      </details>

      {/* FAQ 6: Tipologia di Contratto */}
      <details className="group rounded-xl border border-border-custom bg-bg-card p-4 transition-all duration-200 hover:border-accent/50 open:border-accent/50 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-text-main transition-colors group-hover:text-accent">
          <span>Come mantieni aggiornate le tue competenze?</span>
          <svg 
            className="h-4 w-4 shrink-0 text-text-sub transition-transform duration-200 group-open:rotate-180 group-hover:text-accent" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <p className="mt-3 font-sans leading-relaxed text-text-sub">
         Dedico regolarmente tempo allo studio individuale, alla sperimentazione attraverso i miei progetti e alla consultazione della documentazione ufficiale. Mi interessa soprattutto imparare attraverso la pratica e continuare a migliorare nel tempo.
        </p>
      </details>

    

    </div>
  </div>
</section>





          </main>
        </div>
      </div>
    </div>
  );
}