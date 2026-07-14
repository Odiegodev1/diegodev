"use client"

import { useEffect, useState, useMemo } from "react"
import { GlyphMatrix } from "@/components/ui/glyph-matrix"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { ExternalLink, Clock, Sparkles, Terminal, Link } from "lucide-react"

import Image, { StaticImageData } from "next/image"

import Point from "@/public/point.png"
import Dsicons from "@/public/dsicons.png"
import Eduform from "@/public/eduform.png"
import Inovar from "../../public/inova.png"



// Definição da estrutura tipada de forma rigorosa
interface Project {
  nome: string
  categoria: "Micro-SaaS" | "Open Source" | "Institucional" | "Web App"
  duracao: string
  linguagem: string[]
  link: string
  descricao: string
  img: StaticImageData
}

const MEUS_PROJETOS: Project[] = [
  {
    nome: "EduForm AI",
    categoria: "Micro-SaaS",
    descricao: "Plataforma SaaS que utiliza Inteligência Artificial para capacitar professores e instituições de ensino. O sistema gera avaliações, questionários e formulários personalizados de maneira inteligente, integrando-se nativamente com ferramentas de produtividade.",
    duracao: "1 mês",
    linguagem: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Google APIs", "AI Integration"],
    link: "https://eduform.website/",
    img: Eduform
  },
  {
    nome: "DS Icons",
    categoria: "Open Source",
    duracao: "1 mês",
    linguagem: ["Next.js", "NPM Package", "Vite", "TypeScript", "Tailwind CSS"],
    link: "https://ds-icons.vercel.app/",
    descricao: "Biblioteca open-source de ícones de marcas globais, redes sociais e carteiras digitais projetada especificamente para o ecossistema React. Conta com exportações flexíveis, tipagem nativa estrita e suporte otimizado para Tailwind.",
    img: Dsicons
  },
  {
    nome: "Point do Fortão",
    categoria: "Web App",
    duracao: "3 semanas",
    linguagem: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Supabase"],
    link: "https://fortao-delivery.vercel.app/inicio",
    descricao: "Aplicação completa de delivery de bebidas e agendamento de serviços locais. Inclui painel de gerenciamento em tempo real, automação de pedidos e uma experiência otimizada de ponta a ponta focada em conversão.",
    img: Point
  },
  {
    nome: "Clínica Inovar",
    categoria: "Institucional",
    descricao: "Plataforma institucional de alta fidelidade desenvolvida para uma clínica de especialidades. Com foco extremo em performance, design minimalista sofisticado e facilitação de conversão de leads (agendamentos diretos).",
    duracao: "2 semanas",
    linguagem: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    link: "https://inovar-nine.vercel.app/",
    img: Inovar
  }
]

export default function Home() {
  // next-themes may not be available in some environments; fall back to prefers-color-scheme
  const [resolvedTheme, setResolvedTheme] = useState<string | null>(null)
  const [color, setColor] = useState("#6B7280")
  useEffect(() => {
    if (typeof window === "undefined") return
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const update = (e: MediaQueryListEvent | MediaQueryList) => setResolvedTheme(e.matches ? "dark" : "light")
    update(mq)
    if (mq.addEventListener) mq.addEventListener("change", update)
    else mq.addListener(update)
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update)
      else mq.removeListener(update)
    }
  }, [])
  const [activeCategory, setActiveCategory] = useState<string>("Todos")

  useEffect(() => {
    if (!resolvedTheme) return
    setColor(resolvedTheme === "dark" ? "#10B981" : "#059669")
  }, [resolvedTheme])

  const categories = useMemo(() => {
    return ["Todos", ...Array.from(new Set(MEUS_PROJETOS.map(p => p.categoria)))]
  }, [])

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Todos") return MEUS_PROJETOS
    return MEUS_PROJETOS.filter(p => p.categoria === activeCategory)
  }, [activeCategory])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background font-sans antialiased text-foreground selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* ==================== NOVO DESIGN DE FUNDO PREMIUM ==================== */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none">
        {/* 1. Malha de Engenharia (Grid Pattern) */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
        />
        
        {/* 2. Auroras / Efeitos de Luz Difusa (Atmosphere Glow) */}
        <div className="absolute top-0 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px] dark:bg-emerald-500/5" />
        <div className="absolute bottom-1/4 right-10 -z-10 h-[400px] w-[400px] rounded-full bg-teal-500/10 blur-[100px] dark:bg-teal-500/5" />

        {/* 3. A Matrix de Glifos integrada com a profundidade */}
        <GlyphMatrix
          glyphs="01·•+*/\<>="
          cellSize={16}
          mutationRate={0.02}
          interval={110}
          fadeBottom={0.85}
          color={color}
          className="opacity-10 transition-opacity duration-1000 dark:opacity-20"
        />
        
        {/* 4. Gradiente de Vinheta para as bordas não ficarem duras */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
      </div>
      {/* ====================================================================== */}

      {/* Conteúdo Principal */}
      <main className="relative z-10 mx-auto flex min-h-screen max-w-[1350px] flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          
          {/* COLUNA ESQUERDA: Perfil & Metas de Engenharia */}
          <section className="flex flex-col items-center text-center lg:col-span-4 lg:items-start lg:text-left lg:sticky lg:top-16">
            <div className="group relative mb-6">
              {/* Glow Dinâmico de Fundo */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 opacity-25 blur-md transition duration-500 group-hover:opacity-50" />
              <Avatar className="relative h-32 w-32 border-2 border-emerald-500/20 md:h-36 md:w-36 lg:h-40 lg:w-40 transition-transform duration-300 group-hover:scale-[1.02]">
                <AvatarImage src="https://github.com/Odiegodev1.png" alt="Diego" />
              </Avatar>
            </div>

            <h1 className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
              Diego
            </h1>
            
            <div className="mt-2 flex flex-col items-center gap-2 lg:items-start">
              <p className="text-sm font-semibold text-emerald-500 dark:text-emerald-400 tracking-wide uppercase">
                Engenharia de Software
              </p>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Criando Soluções Digitais
              </span>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Estudante focado no desenvolvimento de sistemas web otimizados, arquiteturas eficientes e micro-serviços. Especializado em transformar regras de negócio em produtos de alto desempenho.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a 
                href="https://github.com/Odiegodev1" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border/60 bg-card/40 px-4 py-2.5 text-xs font-bold text-foreground backdrop-blur-md transition-all hover:bg-emerald-500/10 hover:border-emerald-500/40 hover:shadow-sm"
              >
                <Link className="h-4.5 w-4.5" />
                GitHub Perfil
              </a>
            </div>
          </section>

          {/* COLUNA DIREITA: Showcase de Projetos */}
          <section className="lg:col-span-8 flex flex-col gap-6">
            <div className="rounded-2xl border border-border/50 bg-card/10 p-6 shadow-2xl backdrop-blur-xl md:p-8">
              
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-b border-border/40 pb-6">
                <div className="flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-emerald-500" />
                  <h2 className="text-xl font-bold tracking-tight">Projetos & Sistemas</h2>
                </div>
                
                {/* Sistema Interativo de Filtros */}
                <div className="flex flex-wrap gap-1.5">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                        activeCategory === cat
                          ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 shadow-inner"
                          : "text-muted-foreground hover:bg-card/50 hover:text-foreground border border-transparent"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid dos Projetos */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-6">
                {filteredProjects.map((proj, idx) => (
                  <div 
                    key={proj.nome} 
                    className="group flex flex-col justify-between overflow-hidden rounded-xl border border-border/20 bg-card/30 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/25 hover:bg-card/50 hover:shadow-lg"
                  >
                    {/* Imagem Otimizada com Next/Image */}
                    <div className="relative h-48 w-full overflow-hidden bg-muted/20">
                      <Image 
                        src={proj.img} 
                        alt={proj.nome}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        priority={idx < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                      
                      {/* Badge da Categoria sobreposta */}
                      <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-md bg-emerald-500/90 px-2.5 py-1 text-[10px] font-bold text-black uppercase tracking-wider">
                        <Sparkles className="h-3 w-3" />
                        {proj.categoria}
                      </span>

                      {/* Duração na Borda Inferior */}
                      <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-md bg-black/70 px-2.5 py-1 text-[10px] font-semibold text-slate-200 backdrop-blur-sm">
                        <Clock className="h-3 w-3 text-emerald-400" />
                        {proj.duracao}
                      </span>
                    </div>

                    {/* Conteúdo Informativo */}
                    <div className="flex flex-col flex-grow p-5 justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-extrabold text-base tracking-tight text-foreground group-hover:text-emerald-400 transition-colors">
                            {proj.nome}
                          </h3>
                          <a 
                            href={proj.link} 
                            target="_blank" 
                            rel="noreferrer"
                            className="rounded-lg p-1.5 text-muted-foreground hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors border border-transparent hover:border-emerald-500/10"
                            aria-label={`Visitar ${proj.nome}`}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>

                        <p className="mt-2.5 text-[12px] leading-relaxed text-muted-foreground">
                          {proj.descricao}
                        </p>
                      </div>

                      {/* Lista de Chips de Tecnologias */}
                      <div className="mt-5 pt-4 border-t border-border/10 flex flex-wrap gap-1.5">
                        {proj.linguagem.map((tech) => (
                          <span 
                            key={tech} 
                            className="rounded px-2 py-0.5 text-[10px] font-bold tracking-wide bg-emerald-500/5 text-emerald-500 border border-emerald-500/10 dark:bg-emerald-500/10 dark:text-emerald-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

        </div>
      </main>
    </div>
  )
}