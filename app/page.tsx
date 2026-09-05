"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("home");

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-bg-main text-text-main font-sans selection:bg-accent selection:text-black"
    >
      {/* Sfondo Tech */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '24px 24px, 48px 48px, 48px 48px'
        }}
      />

      {/* Spotlight */}
      <div
        className="pointer-events-none fixed -inset-px z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 102, 0.07), transparent 80%)`,
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

                {/* Navigazione */}
                <nav className="nav hidden lg:block mt-12" aria-label="Navigazione principale">
                  <ul className="flex flex-col gap-3.5 max-w-[220px]">
                    <li>
                      <Link 
                        href="/"
                        className={`group flex items-center justify-between rounded-lg border px-4 py-3 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-150 ${
                          activeSection === "home"
                            ? "border-accent bg-bg-card text-accent shadow-[0_4px_12px_rgba(0,255,102,0.2)]"
                            : "border-border-custom bg-bg-card text-text-main shadow-[0_4px_0_0_#0f172a] hover:border-accent/60 hover:text-accent"
                        }`}
                      >
                        <span>Home</span>
                        <span className={`rounded px-1.5 py-0.5 text-[10px] transition-colors ${
                          activeSection === "home"
                            ? "bg-accent text-black font-bold"
                            : "bg-bg-main text-text-main"
                        }`}>
                          01
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link 
                        href="/chi-sono"
                        className={`group flex items-center justify-between rounded-lg border px-4 py-3 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-150 ${
                          activeSection === "about"
                            ? "border-accent bg-bg-card text-accent shadow-[0_4px_12px_rgba(0,255,102,0.2)]"
                            : "border-border-custom bg-bg-card text-text-main shadow-[0_4px_0_0_#0f172a] hover:border-accent/60 hover:text-accent"
                        }`}
                      >
                        <span>Chi Sono</span>
                        <span className={`rounded px-1.5 py-0.5 text-[10px] transition-colors ${
                          activeSection === "about"
                            ? "bg-accent text-black font-bold"
                            : "bg-bg-main text-text-main"
                        }`}>
                          02
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link 
                        href="/progetti"
                        className={`group flex items-center justify-between rounded-lg border px-4 py-3 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-150 ${
                          activeSection === "projects"
                            ? "border-accent bg-bg-card text-accent shadow-[0_4px_12px_rgba(0,255,102,0.2)]"
                            : "border-border-custom bg-bg-card text-text-main shadow-[0_4px_0_0_#0f172a] hover:border-accent/60 hover:text-accent"
                        }`}
                      >
                        <span>Progetti</span>
                        <span className={`rounded px-1.5 py-0.5 text-[10px] transition-colors ${
                          activeSection === "projects"
                            ? "bg-accent text-black font-bold"
                            : "bg-bg-main text-text-main"
                        }`}>
                          03
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link 
                        href="/contatti"
                        className={`group flex items-center justify-between rounded-lg border px-4 py-3 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-150 ${
                          activeSection === "contacts"
                            ? "border-accent bg-bg-card text-accent shadow-[0_4px_12px_rgba(0,255,102,0.2)]"
                            : "border-border-custom bg-bg-card text-text-main shadow-[0_4px_0_0_#0f172a] hover:border-accent/60 hover:text-accent"
                        }`}
                      >
                        <span>Contatti</span>
                        <span className={`rounded px-1.5 py-0.5 text-[10px] transition-colors ${
                          activeSection === "contacts"
                            ? "bg-accent text-black font-bold"
                            : "bg-bg-main text-text-main"
                        }`}>
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
            
            {/* 1. HERO SECTION */}
            <section id="home" className="scroll-mt-16 md:scroll-mt-24">
           

              <h2 className="text-3xl sm:text-4xl font-bold text-text-main tracking-tight mb-4 leading-tight">
                Trasformo idee e design in <span className="text-accent">interfacce web veloci</span>, reattive e curate nei dettagli.
              </h2>

              <div className="text-text-main text-base leading-relaxed max-w-2xl mb-8 space-y-3 font-sans">
                <p>
                  Sviluppatrice Frontend con un forte background in UI/UX Design.
                </p>
                <p>
                  Specializzata nella realizzazione di layout pixel-perfect in React, Next.js e Tailwind CSS,ponendo sempre grande attenzione all&apos;esperienza utente e alla qualità del codice.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 font-mono text-xs">
                <a 
                  href="/contatti" 
                  className="rounded-lg border border-border-custom bg-bg-card px-5 py-3 font-semibold text-text-main hover:border-accent/50 hover:text-accent transition-all"
                >
                  Contattami Ora ↓
                </a>
                <a 
                  href="/PaolaGrillocv.pdf" 
                  download
                  className="rounded-lg border border-border-custom bg-bg-card px-5 py-3 font-semibold text-text-main hover:border-accent/50 hover:text-accent transition-all"
                >
                  Scarica CV (PDF) ↓
                </a>
              </div>
            </section>

            {/* 2. CHI SONO */}
            <section id="about" className="scroll-mt-16 md:scroll-mt-24">
              <h3 className="text-sm font-mono uppercase tracking-widest text-accent mb-6">
                Chi sono
              </h3>
              <div className="space-y-3 text-text-main leading-relaxed font-sans">
                <p>
                  La mia passione per il web nasce dall&apos;incontro tra la cura estetica della grafica e la struttura logica della programmazione. Lavoro all&apos;intersezione tra <strong className="text-text-main font-semibold">Design e Frontend Development</strong>, garantendo che ogni progetto non sia soltanto bello da vedere, ma anche veloce, performante e intuitivo da navigare.
                </p>
                <p>
                  Che si tratti di progettare da zero un&apos;interfaccia su Figma o di sviluppare un&apos;applicazione reattiva in Next.js e TypeScript, il mio obiettivo è curare ogni singola micro-interazione e dettaglio tecnico.
                </p>
              </div>
            </section>

            {/* 3. PROGETTI IN EVIDENZA */}
            <section id="projects" className="scroll-mt-16 md:scroll-mt-24">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-sm font-mono uppercase tracking-widest text-accent">
                  Progetti in evidenza
                </h3>
                <div className="flex flex-wrap items-center gap-4 font-mono text-xs">
                  <Link href="/progetti" className="rounded-lg border border-border-custom bg-bg-card px-5 py-3 font-semibold text-text-main hover:border-accent/50 hover:text-accent transition-all">
                    Vedi tutti i progetti →
                  </Link>
                </div>
              </div>

              <div className="space-y-6">



                 {/* Scheda 1 */}
            <div className="group relative rounded-xl border border-border-custom bg-bg-card p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-accent/50">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-accent uppercase tracking-wider">Web App</span>
                  <span className="font-mono text-xs text-text-main">2026</span>
                </div>
                
                <h4 className="text-xl font-bold text-text-main group-hover:text-accent transition-colors">
                  <Link href="https://jobapplication-tracker-chi.vercel.app/" target="_blank" rel="noreferrer" className="after:absolute after:inset-0">
                    Job Application Tracker
                  </Link>
                </h4>
                
                <p className="text-text-main leading-relaxed font-sans">
                  Bacheca Kanban per tracciare le proprie candidature di lavoro, con colonne di stato (Candidato, Colloqui, Esito), drag & drop, modale di dettaglio per ogni candidatura ed eliminazione multipla. I dati vengono salvati in locale e persistono tra le sessioni.
                </p>

                <ul className="flex flex-wrap gap-2 font-mono text-xs text-accent pt-2">
                  <li className="rounded-full bg-accent/10 border border-accent/20 px-3 py-1">HTML5</li>
                  <li className="rounded-full bg-accent/10 border border-accent/20 px-3 py-1">CSS3</li>
                  <li className="rounded-full bg-accent/10 border border-accent/20 px-3 py-1">JavaScript</li>
                  <li className="rounded-full bg-accent/10 border border-accent/20 px-3 py-1">LocalStorage API</li>
                  <li className="rounded-full bg-accent/10 border border-accent/20 px-3 py-1">Drag and Drop API</li>
                  <li className="rounded-full bg-accent/10 border border-accent/20 px-3 py-1">Responsive Design</li>
                </ul>
              </div>
            </div>

            {/* Scheda 2 */}
            <div className="group relative rounded-xl border border-border-custom bg-bg-card p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-accent/50">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-accent uppercase tracking-wider">Web App</span>
                  <span className="font-mono text-xs text-text-main">2026</span>
                </div>
                
                <h4 className="text-xl font-bold text-text-main group-hover:text-accent transition-colors">
                  <Link href="https://skill-quiz-app-neon.vercel.app/" target="_blank" rel="noreferrer" className="after:absolute after:inset-0">
                    Skill Quiz App
                  </Link>
                </h4>
                
                <p className="text-text-main leading-relaxed font-sans">
                  Applicazione quiz interattiva per testare le proprie competenze tecniche, con domande a scelta multipla e Vero/Falso, feedback visivo immediato, spiegazioni e punteggio finale salvato in modo persistente.
                </p>

                <ul className="flex flex-wrap gap-2 font-mono text-xs text-accent pt-2">
                  <li className="rounded-full bg-accent/10 border border-accent/20 px-3 py-1">Next.js</li>
                  <li className="rounded-full bg-accent/10 border border-accent/20 px-3 py-1">React</li>
                  <li className="rounded-full bg-accent/10 border border-accent/20 px-3 py-1">TypeScript</li>
                  <li className="rounded-full bg-accent/10 border border-accent/20 px-3 py-1">Tailwind CSS</li>
                  <li className="rounded-full bg-accent/10 border border-accent/20 px-3 py-1">LocalStorage API</li>
                </ul>
              </div>
            </div>

              </div>
            </section>

            {/* 4. COMPETENZE & TOOLKIT */}
            <section id="skills" className="scroll-mt-16 md:scroll-mt-24">
              <h3 className="text-sm font-mono uppercase tracking-widest text-accent mb-6">
                Competenze & Tools
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="font-mono text-xs text-text-main uppercase mb-3">Frontend Development</div>
                  <div className="flex flex-wrap gap-2 font-mono text-xs text-text-main">
                    <span className="rounded-lg border border-border-custom bg-bg-card px-3 py-2 hover:border-accent/40 transition-colors">HTML5 / CSS3</span>
                    <span className="rounded-lg border border-border-custom bg-bg-card px-3 py-2 hover:border-accent/40 transition-colors">JavaScript (ES6+)</span>
                    <span className="rounded-lg border border-border-custom bg-bg-card px-3 py-2 hover:border-accent/40 transition-colors">TypeScript</span>
                    <span className="rounded-lg border border-border-custom bg-bg-card px-3 py-2 hover:border-accent/40 transition-colors">React</span>
                    <span className="rounded-lg border border-border-custom bg-bg-card px-3 py-2 hover:border-accent/40 transition-colors">Next.js</span>
                    <span className="rounded-lg border border-border-custom bg-bg-card px-3 py-2 hover:border-accent/40 transition-colors">Tailwind CSS</span>
                    <span className="rounded-lg border border-border-custom bg-bg-card px-3 py-2 hover:border-accent/40 transition-colors">Bootstrap</span>
                  </div>
                </div>

                <div>
                  <div className="font-mono text-xs text-text-main uppercase mb-3">UI/UX & Design Systems</div>
                  <div className="flex flex-wrap gap-2 font-mono text-xs text-text-main">
                    <span className="rounded-lg border border-border-custom bg-bg-card px-3 py-2 hover:border-accent/40 transition-colors">Figma (Auto Layout, Tokens)</span>
                    <span className="rounded-lg border border-border-custom bg-bg-card px-3 py-2 hover:border-accent/40 transition-colors">Wireframing & Prototyping</span>
                    <span className="rounded-lg border border-border-custom bg-bg-card px-3 py-2 hover:border-accent/40 transition-colors">WordPress / WooCommerce</span>
                    <span className="rounded-lg border border-border-custom bg-bg-card px-3 py-2 hover:border-accent/40 transition-colors">Git / GitHub</span>
                  </div>
                </div>
              </div>
            </section>

          </main>

        </div>
      </div>
    </div>
  );
}