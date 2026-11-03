"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  Github,
  ImageIcon,
  Layers3,
  X,
  ZoomIn,
} from "lucide-react";

type Project = {
  id: string;
  title: string;
  role: string;
  description: string;
  technologies: string[];
  images: string[];
  website: string;
  github?: string;
  featured?: boolean;
  label?: string;
};

const projects: Project[] = [
  {
    id: "caixinha-natal",
    title: "Caixinha de Natal",
    role: "Desenvolvimento Full Stack",
    description:
      "Aplicação web criada para uma campanha de Natal no comércio local. Permite que clientes contribuam via Pix e recebam tickets digitais com benefícios exclusivos para resgate presencial. Desenvolvi a experiência de participação, a integração de pagamentos e o fluxo de confirmação das contribuições.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "InfinitePay",
      "Pix",
    ],
    images: ["/projects/caixinha-natal.png"],
    website: "https://caixinha-natal.vercel.app/",
    github: "https://github.com/Odiegodev1/caixinha-natal",
    featured: true,
    label: "Projeto em destaque",
  },
  {
    id: "chamados-internos",
    title: "Chamados Internos",
    role: "Desenvolvimento Full Stack",
    description:
      "Sistema de gerenciamento de chamados internos desenvolvido para organizar solicitações de suporte técnico. Conta com abertura e acompanhamento de chamados, classificação por prioridade, controle de status, filtros e histórico das solicitações. O foco foi criar uma interface objetiva para facilitar a rotina de atendimento.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Auth.js",
    ],
    images: ["/projects/chamados-internos.png"],
    website: "https://sistema-chamado-xi.vercel.app/",
  },
  {
    id: "ds-icons",
    title: "DS Icons",
    role: "Desenvolvimento Frontend & Open Source",
    description:
      "Biblioteca de ícones e componentes voltada ao mercado financeiro brasileiro. Reúne representações de bancos, marcas e serviços digitais em um catálogo pesquisável, com visualização dos componentes e opções de personalização. O projeto foi pensado para facilitar a construção de dashboards e interfaces financeiras.",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Componentes",
      "NPM",
      "Open Source",
    ],
    images: [
      "/projects/ds-icons-home.png",
      "/projects/ds-icons-catalogo.png",
    ],
    website: "https://ds-icons.vercel.app/",
    label: "Biblioteca de componentes",
  },
];

function ProjectCard({
  project,
  index,
  onPreview,
}: {
  project: Project;
  index: number;
  onPreview: (project: Project) => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.65,
        delay: Math.min(index * 0.08, 0.2),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex min-w-0 flex-col"
    >
      {/* Imagem */}
      <button
        type="button"
        onClick={() => onPreview(project)}
        aria-label={`Ampliar imagem do projeto ${project.title}`}
        className="relative block aspect-[1.55/1] w-full cursor-zoom-in overflow-hidden rounded-2xl border border-white/10 bg-[#111111] text-left transition-colors duration-300 hover:border-white/20 sm:aspect-[1.7/1]"
      >
        <img
          src={project.images[0]}
          alt={`Captura de tela do projeto ${project.title}`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.045]"
        />

        {/* Sombra inferior */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Etiqueta */}
        {project.label && (
          <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/70 px-3 py-1.5 text-[10px] font-medium text-white backdrop-blur-xl sm:text-xs">
            {project.label}
          </span>
        )}

        {/* Zoom */}
        <span className="absolute bottom-4 right-4 flex size-10 translate-y-2 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white opacity-0 backdrop-blur-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ZoomIn className="size-4" />
        </span>
      </button>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold tracking-[-0.035em] text-white sm:text-2xl">
              {project.title}
            </h3>

            <p className="mt-2 text-xs font-medium text-zinc-500 sm:text-sm">
              {project.role}
            </p>
          </div>

          <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-500">
            <ArrowUpRight className="size-4" />
          </span>
        </div>

        <p className="mt-5 text-sm leading-[1.85] text-zinc-400">
          {project.description}
        </p>

        {/* Tecnologias */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-white/[0.07] bg-white/[0.045] px-2.5 py-1.5 text-[11px] text-zinc-400 transition-colors hover:border-white/15 hover:text-white"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Botões */}
        <div className="mt-auto flex flex-wrap gap-2 pt-7">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-4 text-xs font-medium text-zinc-200 transition-colors hover:bg-white/10 sm:text-sm"
            >
              <Github className="size-4" />
              Código
            </a>
          )}

          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-white px-4 text-xs font-semibold text-black transition-colors hover:bg-zinc-200 sm:text-sm"
          >
            <ExternalLink className="size-4" />
            Ver projeto
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectPreview({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Visualização de ${project.title}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        transition={{ duration: 0.25 }}
        className="flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111111]"
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
          <div className="min-w-0">
            <h3 className="truncate text-sm font-semibold text-white sm:text-base">
              {project.title}
            </h3>
            <p className="mt-1 text-xs text-zinc-500">
              Visualização do projeto
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar visualização"
            className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-auto bg-[#080808]">
          <img
            src={project.images[activeImage]}
            alt={`${project.title} - imagem ${activeImage + 1}`}
            className="mx-auto h-auto max-h-[65vh] w-auto max-w-full object-contain"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 p-4">
          <div className="flex flex-wrap gap-2">
            {project.images.length > 1 &&
              project.images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`rounded-lg px-3 py-2 text-xs transition-colors ${
                    activeImage === index
                      ? "bg-white text-black"
                      : "bg-white/[0.06] text-zinc-400 hover:text-white"
                  }`}
                >
                  Imagem {index + 1}
                </button>
              ))}
          </div>

          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-xs font-semibold text-black hover:bg-zinc-200"
          >
            Abrir projeto
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ContactProjectCard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65 }}
      className="group flex flex-col"
    >
      <a
        href="#contato"
        className="relative flex aspect-[1.55/1] flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed border-white/15 bg-[#0d0d0d] text-center transition-all duration-300 hover:border-white/30 hover:bg-[#121212] sm:aspect-[1.7/1]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.055),transparent_65%)]" />

        <div className="relative flex flex-col items-center">
          <div className="mb-5 flex size-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition-transform duration-300 group-hover:-translate-y-1">
            <Layers3 className="size-7 text-zinc-400" strokeWidth={1.3} />
          </div>

          <span className="text-xs font-medium tracking-[0.2em] text-zinc-500 uppercase">
            Seu projeto, sua ideia
          </span>

          <span className="mt-3 text-lg font-semibold text-white">
            Vamos construir algo?
          </span>
        </div>
      </a>

      <div className="flex flex-1 flex-col pt-5">
        <h3 className="text-xl font-semibold tracking-[-0.035em] text-white sm:text-2xl">
          Seu projeto aqui
        </h3>

        <p className="mt-2 text-xs font-medium text-zinc-500 sm:text-sm">
          Desenvolvimento de soluções digitais
        </p>

        <p className="mt-5 text-sm leading-[1.85] text-zinc-400">
          Tem uma ideia para um site, aplicativo ou sistema? Posso ajudar
          a transformá-la em uma solução funcional, com interfaces
          responsivas, integrações e atenção à experiência de quem
          vai utilizar o produto.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {["Web", "Aplicações", "APIs", "Integrações", "UX/UI"].map(
            (item) => (
              <span
                key={item}
                className="rounded-md border border-white/[0.07] bg-white/[0.045] px-2.5 py-1.5 text-[11px] text-zinc-400"
              >
                {item}
              </span>
            )
          )}
        </div>

        <div className="mt-auto pt-7">
          <a
            href="#contato"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-white px-4 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Vamos conversar
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    null
  );

  const reduceMotion = useReducedMotion();

  return (
    <>
      <section
        id="projetos"
        className="relative z-10 scroll-mt-24 bg-black px-5 py-24 text-white sm:px-8 sm:py-32"
      >
        <div className="mx-auto w-full max-w-5xl">
          {/* Cabeçalho */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="mb-14 flex flex-col items-center text-center sm:mb-20"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-xs text-zinc-400 backdrop-blur-sm sm:text-sm">
              <BriefcaseBusiness className="size-4" />
              Projetos
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              O que eu já fiz?
            </h2>

            <div className="mt-2 flex items-baseline justify-center gap-3 sm:gap-5">
              <span className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                Meus
              </span>

              <span className="font-serif text-4xl font-normal italic tracking-[-0.06em] text-zinc-400 sm:text-6xl">
                trabalhos.
              </span>
            </div>

            <p className="mt-7 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
              Uma seleção de projetos em que transformei ideias em
              aplicações reais, explorando desenvolvimento web,
              integrações e experiência do usuário.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 items-start gap-x-10 gap-y-16 md:grid-cols-2 md:gap-y-20">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onPreview={setSelectedProject}
              />
            ))}

            <ContactProjectCard />
          </div>

          {/* Rodapé */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                <Code2 className="size-4 text-zinc-400" />
              </div>

              <div>
                <p className="text-sm font-medium text-white">
                  Quer explorar mais?
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                  Outros estudos e experimentos estão no meu GitHub.
                </p>
              </div>
            </div>

            <a
              href="https://github.com/Odiegodev1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              Ver meu GitHub
              <ArrowUpRight className="size-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Modal de imagens */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectPreview
            key={selectedProject.id}
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}