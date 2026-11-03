"use client";

import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  MapPin,
} from "lucide-react";

import AuroraBackground from "./components/aurora-background";
import SidebarMenu from "./components/navbar";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import TechMarquee from "./components/tech-marquee";
import AboutSection from "./components/about-section";
import ProjectsSection from "./components/projects-section";
import ContactSection from "./components/contact-section";

const technologies = [
  "Next.js",
  "TypeScript",
  "React",
  "Go",
  "PostgreSQL",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Home() {
  return (
    <>
          <SidebarMenu />
        
    <main
      id="inicio"
      className="relative isolate min-h-screen overflow-hidden bg-black text-white"
    >
      {/* Background */}
     
      <AuroraBackground />
      {/* Navbar */}


      {/* HERO */}
      <section className="relative z-10 flex min-h-screen flex-col px-5 pt-36 pb-10 sm:px-8 sm:pt-44 lg:px-12 lg:pt-48">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: 0.12,
            delayChildren: 0.15,
          }}
          className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center text-center"
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-7 sm:mb-9"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-30" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>

              <AnimatedShinyText className="text-xs font-medium sm:text-sm">
                Disponível para oportunidades
              </AnimatedShinyText>

              <ArrowUpRight className="size-3.5 text-zinc-400" />
            </div>
          </motion.div>

          {/* Apresentação */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="mb-5"
          >
            <span className="text-xs font-medium tracking-[0.25em] text-zinc-400 uppercase sm:text-sm">
              Olá, eu sou Diego Santos
            </span>
          </motion.div>

          {/* Título */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.75 }}
            className="
              max-w-5xl
              text-[clamp(2.6rem,7.5vw,6.5rem)]
              leading-[1.05]
              font-semibold
              tracking-[-0.065em]
              text-balance
            "
          >
            Desenvolvo software
            <br />

            <span className="bg-linear-to-b from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
              que faz a diferença.
            </span>
          </motion.h1>

          {/* Descrição */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="
              mt-7
              max-w-xl
              px-2
              text-sm
              leading-7
              font-normal
              text-zinc-400
              sm:text-base
              sm:leading-8
              lg:text-lg
            "
          >
            Sou desenvolvedor Full Stack e estudante de Engenharia de
            Software. Transformo problemas reais em aplicações web,
            APIs e produtos digitais, do planejamento à produção.
          </motion.p>

          {/* Botões */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
          >
            <a
              href="#projetos"
              className="
                group
                inline-flex
                h-12
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-white
                px-7
                text-sm
                font-semibold
                text-black
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-zinc-200
                sm:w-auto
              "
            >
              Explorar projetos

              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#contato"
              className="
                group
                inline-flex
                h-12
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-white/15
                bg-white/[0.04]
                px-7
                text-sm
                font-medium
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-white/30
                hover:bg-white/10
                sm:w-auto
              "
            >
              Vamos conversar

              <ArrowUpRight className="size-4 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* Tecnologias */}
      {/* Tecnologias */}
<motion.div
  variants={fadeUp}
  transition={{
    duration: 0.7,
    delay: 0.2,
  }}
  className="mt-12 w-full max-w-4xl sm:mt-16"
>
  <TechMarquee />
</motion.div>
        </motion.div>

        {/* Rodapé da hero */}
        <div className="mx-auto mt-14 flex w-full max-w-6xl flex-col items-center justify-between gap-5 border-t border-white/[0.08] pt-6 sm:flex-row">
          {/* Localização */}
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <MapPin className="size-3.5" />
            Saquarema, Rio de Janeiro — Brasil
          </div>

          {/* Scroll */}
          <a
            href="#sobre"
            className="group flex items-center gap-2 text-xs text-zinc-400 transition-colors hover:text-white"
          >
            Role para explorar

            <ArrowDownRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>

          {/* Redes sociais */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Odiegodev1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 transition-colors hover:text-white"
            >
              <Github className="size-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/odiegodev1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 transition-colors hover:text-white"
            >
              <Linkedin className="size-4" />
            </a>
          </div>
        </div>
      </section>
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    </>
  );
}