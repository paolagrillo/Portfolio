"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactsPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("contacts");

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-bg-main text-text-sub font-sans selection:bg-accent selection:text-bg-main"
    >
      {/* Sfondo Tech: Griglia di coordinate in trasparenza */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '24px 24px, 48px 48px, 48px 48px'
        }}
      />

      {/* Raggio di luce Spotlight al movimento del mouse */}
      <div
        className="pointer-events-none fixed -inset-px z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--accent-color), transparent 80%)`,
          opacity: 0.15
        }}
      />

      {/* Contenitore Principale */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="lg:flex lg:justify-between lg:gap-8 lg:items-start">
          
          {/* COLONNA SINISTRA (HEADER & NAV) */}
          <div className="lg:w-4/12 xl:w-3/12 lg:sticky lg:top-0 lg:h-screen lg:pr-4">
            <header className="flex h-full flex-col justify-between lg:py-10 py-12">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-text-main sm:text-5xl">
                  Paola Grillo
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-accent sm:text-xl">
                  Frontend Developer & UI/UX Designer
                </h2>
                <p className="mt-4 max-w-xs leading-normal text-text-sub">
                  Sviluppo interfacce web moderne, interattive e curate nei minimi dettagli.
                </p>

                {/* Navigazione */}
                <nav className="nav hidden lg:block mt-8" aria-label="Navigazione principale">
                  <ul className="flex flex-col gap-2 max-w-[220px]">
                    
                    {/* HOME */}
                    <li>
                      <Link 
                        href="/"
                        className={`group flex items-center justify-between rounded-lg border px-4 py-3 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-150 ${
                          activeSection === "home"
                            ? "border-accent bg-bg-card text-accent shadow-sm"
                            : "border-border-custom bg-bg-card text-text-sub hover:border-accent hover:text-accent"
                        }`}
                      >
                        <span>Home</span>
                        <span className={`rounded px-1.5 py-0.5 text-[10px] transition-colors ${
                          activeSection === "home"
                            ? "bg-accent text-bg-main font-bold"
                            : "bg-bg-main text-text-sub"
                        }`}>
                          01
                        </span>
                      </Link>
                    </li>

                    {/* CHI SONO */}
                    <li>
                      <Link 
                        href="/chi-sono"
                        className={`group flex items-center justify-between rounded-lg border px-4 py-3 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-150 ${
                          activeSection === "about"
                            ? "border-accent bg-bg-card text-accent shadow-sm"
                            : "border-border-custom bg-bg-card text-text-sub hover:border-accent hover:text-accent"
                        }`}
                      >
                        <span>Chi Sono</span>
                        <span className={`rounded px-1.5 py-0.5 text-[10px] transition-colors ${
                          activeSection === "about"
                            ? "bg-accent text-bg-main font-bold"
                            : "bg-bg-main text-text-sub"
                        }`}>
                          02
                        </span>
                      </Link>
                    </li>

                    {/* PROGETTI */}
                    <li>
                      <Link 
                        href="/progetti"
                        className={`group flex items-center justify-between rounded-lg border px-4 py-3 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-150 ${
                          activeSection === "projects"
                            ? "border-accent bg-bg-card text-accent shadow-sm"
                            : "border-border-custom bg-bg-card text-text-sub hover:border-accent hover:text-accent"
                        }`}
                      >
                        <span>Progetti</span>
                        <span className={`rounded px-1.5 py-0.5 text-[10px] transition-colors ${
                          activeSection === "projects"
                            ? "bg-accent text-bg-main font-bold"
                            : "bg-bg-main text-text-sub"
                        }`}>
                          03
                        </span>
                      </Link>
                    </li>

                    {/* CONTATTI */}
                    <li>
                      <Link 
                        href="/contatti"
                        className={`group flex items-center justify-between rounded-lg border px-4 py-3 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-150 ${
                          activeSection === "contacts"
                            ? "border-accent bg-bg-card text-accent shadow-sm"
                            : "border-border-custom bg-bg-card text-text-sub hover:border-accent hover:text-accent"
                        }`}
                      >
                        <span>Contatti</span>
                        <span className={`rounded px-1.5 py-0.5 text-[10px] transition-colors ${
                          activeSection === "contacts"
                            ? "bg-accent text-bg-main font-bold"
                            : "bg-bg-main text-text-sub"
                        }`}>
                          04
                        </span>
                      </Link>
                    </li>

                  </ul>
                </nav>
              </div>

              {/* Social Link */}
              <div className="mt-6 flex items-center gap-3 text-text-main">
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

          {/* COLONNA DESTRA (CONTENUTO CONTATTI) */}
          <main id="content" className="pt-24 lg:w-8/12 xl:w-9/12 lg:py-24 lg:pl-12 lg:border-l lg:border-border-custom space-y-24">
            
            <section id="contact" className="scroll-mt-16 md:scroll-mt-24 max-w-2xl">
              
              {/* Badge Status Immediato */}
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs text-accent mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span>Disponibile da subito • Full-Time / Ibrido / Remote</span>
              </div>

              <h2 className="text-3xl font-bold text-text-main tracking-tight mb-3">
                Valuto opportunità lavorative
              </h2>
              
              <p className="text-base text-text-sub mb-8 leading-relaxed">
                Cerco un ruolo come <strong className="text-text-main">Frontend Developer</strong> o <strong className="text-text-main">UI/UX Designer</strong> (React, TypeScript, Tailwind, Figma). Se stai cercando una figura operativa e pronta all'inserimento, contattami direttamente.
              </p>

              {/* Interactive Quick-Copy Box */}
              <div className="rounded-xl border border-border-custom bg-bg-card p-4 font-mono text-xs">
                <div className="text-text-sub text-[10px] uppercase mb-3">// Copia rapida recapiti</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  
                  <button 
                    onClick={() => navigator.clipboard.writeText("paolagrillo127@gmail.com")}
                    className="flex items-center justify-between rounded-lg border border-border-custom bg-bg-main p-3 text-text-sub hover:border-accent hover:text-accent transition-all group"
                  >
                    <span className="truncate">paolagrillo127@gmail.com</span>
                    <span className="text-[10px] bg-bg-card px-2 py-1 rounded text-text-sub group-hover:bg-accent group-hover:text-bg-main font-bold transition-all">
                      Copia
                    </span>
                  </button>

                  <button 
                    onClick={() => navigator.clipboard.writeText("+393923203787")}
                    className="flex items-center justify-between rounded-lg border border-border-custom bg-bg-main p-3 text-text-sub hover:border-accent hover:text-accent transition-all group"
                  >
                    <span>+39 392 320 3787</span>
                    <span className="text-[10px] bg-bg-card px-2 py-1 rounded text-text-sub group-hover:bg-accent group-hover:text-bg-main font-bold transition-all">
                      Copia
                    </span>
                  </button>

                </div>
                
              </div>

              {/* Info Aggiuntive & CV */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border-custom bg-bg-card p-4 font-mono text-xs">
  <div className="flex items-center gap-2 text-text-sub">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
    </span>
    <span>Milano, Italia / Full-Time & Remote</span>
  </div>

  {/* Pulsante Download CV */}
  <a 
    href="/PaolaGrillocv.pdf" 
    download 
    className="inline-flex items-center gap-2 rounded-lg border border-border-custom px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-text-sub hover:border-accent/50 hover:text-accent transition-all"
  >
    <span>Scarica CV</span>
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
    </svg>
  </a>
</div>

            </section>

 <section>
  {/* FAQ rapide per Recruiter */}
  <div className="space-y-4">
    <h3 className="font-mono uppercase tracking-widest text-accent mb-8">
      FAQ Rapide
    </h3>

    <div className="grid gap-3 font-mono">
      
      {/* FAQ 1: profilo professionale */}
      <details className="group rounded-xl border border-border-custom bg-bg-card p-4 transition-all duration-200 hover:border-accent/50 open:border-accent/50 [&_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-text-main text-sm transition-colors group-hover:text-accent">
          <span>Qual è il tuo profilo professionale?</span>
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
        <p className="mt-3 font-sans leading-relaxed text-text-sub text-base">
         Mi propongo come Junior Frontend Developer / UI/UX Designer, con una formazione che unisce sviluppo web e progettazione grafica. Mi interessa lavorare su interfacce moderne, responsive e curate, mettendo insieme competenze tecniche e sensibilità per il design.
        </p>
      </details>

      {/* FAQ 2: tecnologie */}
      <details className="group rounded-xl border border-border-custom bg-bg-card p-4 transition-all duration-200 hover:border-accent/50 open:border-accent/50 [&_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-text-main text-sm transition-colors group-hover:text-accent">
          <span>Quali tecnologie utilizzi principalmente?</span>
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
Lavoro principalmente con React, Next.js, TypeScript e Tailwind CSS per lo sviluppo frontend. Per la parte di progettazione utilizzo Figma per wireframe, prototipi e organizzazione delle interfacce.        </p>
      </details>

      {/* FAQ 3: disponibilità */}
      <details className="group rounded-xl border border-border-custom bg-bg-card p-4 transition-all duration-200 hover:border-accent/50 open:border-accent/50 [&_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-text-main text-sm transition-colors group-hover:text-accent">
          <span>Sei disponibile da subito?</span>
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
Sì, sono disponibile da subito per opportunità full remote e ibride nell'area di Milano e provincia.
        </p>
      </details>

      {/* FAQ 4: obiettivo professionale */}
      <details className="group rounded-xl border border-border-custom bg-bg-card p-4 transition-all duration-200 hover:border-accent/50 open:border-accent/50 [&_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-text-main text-sm transition-colors group-hover:text-accent">
          <span>Che tipo di opportunità stai cercando?</span>
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
Sono interessata principalmente a opportunità come Junior Frontend Developer o UI/UX Designer. Valuto sia inserimenti in azienda sia collaborazioni su progetti specifici, in base al ruolo e al contesto.
        </p>
      </details>

      {/* FAQ 5: teaom o autonomo */}
      <details className="group rounded-xl border border-border-custom bg-bg-card p-4 transition-all duration-200 hover:border-accent/50 open:border-accent/50 [&_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-text-main text-sm transition-colors group-hover:text-accent">
          <span>Preferisci lavorare in autonomia o in team?</span>
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
        Mi trovo a mio agio in entrambe le modalità. Riesco a gestire task e attività in autonomia, ma considero molto importante il confronto con sviluppatori e designer per condividere idee, feedback e buone pratiche.
        </p>
      </details>

      {/* FAQ 6: trasformazione */}
      <details className="group rounded-xl border border-border-custom bg-bg-card p-4 transition-all duration-200 hover:border-accent/50 open:border-accent/50 [&_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-text-main text-sm transition-colors group-hover:text-accent">
          <span>Come trasformi un design Figma in un'interfaccia web?</span>
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
       Cerco di mantenere coerenza tra progettazione e sviluppo, organizzando l'interfaccia in modo modulare e traducendo il design in componenti frontend riutilizzabili. L'obiettivo è ottenere un risultato il più possibile fedele al progetto, mantenendo attenzione a responsive design e usabilità.
        </p>
      </details>

          {/* FAQ 7: responsive design */}
      <details className="group rounded-xl border border-border-custom bg-bg-card p-4 transition-all duration-200 hover:border-accent/50 open:border-accent/50 [&_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-text-main text-sm transition-colors group-hover:text-accent">
          <span>Come lavori sul responsive design?</span>
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
       Parto da un approccio mobile-first e utilizzo CSS e Tailwind per costruire interfacce che si adattino ai diversi breakpoint. Presto attenzione anche alla struttura semantica dell'HTML e alla fruibilità dell'interfaccia.
        </p>
      </details>

                {/* FAQ 8: wordpress */}
      <details className="group rounded-xl border border-border-custom bg-bg-card p-4 transition-all duration-200 hover:border-accent/50 open:border-accent/50 [&_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-text-main text-sm transition-colors group-hover:text-accent">
          <span>Hai esperienza con WordPress?</span>
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
Sì, ho esperienza nella configurazione e personalizzazione di siti WordPress, compresi WooCommerce ed Elementor. È una competenza che posso utilizzare soprattutto per siti aziendali, landing page e progetti basati su CMS.
   </p>
      </details>

              {/* FAQ 9: wordpress */}
      <details className="group rounded-xl border border-border-custom bg-bg-card p-4 transition-all duration-200 hover:border-accent/50 open:border-accent/50 [&_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-text-main text-sm transition-colors group-hover:text-accent">
          <span>Come gestisci il codice e il deployment?</span>
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
Utilizzo Git e GitHub per il controllo versione del codice e Vercel per il deployment delle applicazioni web e dei miei progetti.   </p>
      </details>

          {/* FAQ 10: REST API */}
      <details className="group rounded-xl border border-border-custom bg-bg-card p-4 transition-all duration-200 hover:border-accent/50 open:border-accent/50 [&_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-text-main text-sm transition-colors group-hover:text-accent">
          <span>Hai esperienza con API e gestione dei dati?</span>
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
Sto approfondendo l'integrazione di REST API e la gestione dello stato in React/Next.js. Nei miei progetti ho già lavorato sulla persistenza dei dati lato client e sto continuando a sviluppare queste competenze attraverso la pratica.  </p>
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