"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  MapPin,
  SearchCheck,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Entender o problema",
    description:
      "Antes de escrever código, procuro entender o que precisa ser resolvido, quem vai utilizar a aplicação e quais funcionalidades realmente fazem sentido.",
    icon: BrainCircuit,
    tags: ["Requisitos", "Arquitetura", "Planejamento"],
  },
  {
    number: "02",
    title: "Estruturar a solução",
    description:
      "Organizo as interfaces, os fluxos de navegação, os modelos de dados e a comunicação entre frontend e backend para construir uma base consistente.",
    icon: Wrench,
    tags: ["UX/UI", "Banco de dados", "APIs"],
  },
  {
    number: "03",
    title: "Desenvolver e integrar",
    description:
      "Transformo o planejamento em software funcional. Trabalho com React e Next.js nas interfaces, além de APIs, autenticação, bancos de dados e integrações externas.",
    icon: Code2,
    tags: ["Next.js", "TypeScript", "Go", "PostgreSQL"],
  },
  {
    number: "04",
    title: "Testar e evoluir",
    description:
      "Verifico os fluxos principais, trato erros e ajusto a experiência. Meu objetivo é entregar aplicações que sejam fáceis de utilizar e de manter.",
    icon: SearchCheck,
    tags: ["Validação", "Performance", "Manutenção"],
  },
];

const highlights = [
  {
    icon: GraduationCap,
    title: "Formação",
    description: "Engenharia de Software",
  },
  {
    icon: Server,
    title: "Especialidade",
    description: "Desenvolvimento Full Stack",
  },
  {
    icon: Wrench,
    title: "Experiência",
    description: "Desenvolvimento e suporte técnico",
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative z-10 scroll-mt-28 bg-black px-5 py-24 text-white sm:px-8 sm:py-32"
    >
      <div className="mx-auto w-full max-w-5xl">
        {/* CABEÇALHO */}
        <Reveal className="mb-12 flex flex-col items-center text-center sm:mb-16">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-xs text-zinc-400 backdrop-blur-md sm:text-sm">
            <Sparkles className="size-4" />
            Um pouco sobre mim
          </div>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Muito além de
            <br />
            <span className="bg-gradient-to-b from-white to-zinc-600 bg-clip-text text-transparent">
              escrever código.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
            Conheça minha trajetória, o que estou construindo e como
            transformo problemas em soluções digitais.
          </p>
        </Reveal>

        {/* CARTÃO DE PERFIL */}
        <Reveal>
          <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[#0b0b0b]">
            {/* Topo */}
            <div className="flex flex-col gap-6 border-b border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div className="flex min-w-0 items-center gap-4">
                <div className="relative size-16 shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-zinc-900 sm:size-20">
                  <img
                    src="https://github.com/Odiegodev1.png"
                    alt="Foto de perfil de Diego Santos"
                    className="size-full object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                      Diego Santos
                    </h3>

                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.07] px-3 py-1 text-[11px] text-emerald-400">
                      <span className="size-1.5 rounded-full bg-emerald-400" />
                      Disponível
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-zinc-400">
                    Desenvolvedor Full Stack
                  </p>

                  <p className="mt-2 flex items-center gap-1.5 text-xs text-zinc-500">
                    <MapPin className="size-3.5" />
                    Saquarema, Rio de Janeiro
                  </p>
                </div>
              </div>

              {/* Redes */}
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/Odiegodev1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Github className="size-4.5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/odiegodev1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Linkedin className="size-4.5" />
                </a>

                {/* Ative quando adicionar seu currículo em public/curriculo.pdf */}
                <a
                  href="/curriculo.pdf"
                  download="Diego-Santos-Curriculo.pdf"
                  aria-label="Baixar currículo"
                  className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Download className="size-4.5" />
                </a>
              </div>
            </div>

            {/* Biografia */}
            <div className="space-y-5 p-5 text-sm leading-8 text-zinc-400 sm:p-8 sm:text-base">
              <p>
                Sou <strong className="font-medium text-white">Diego Santos</strong>,
                desenvolvedor Full Stack e estudante de Engenharia de Software.
                Gosto de entender como sistemas funcionam por completo:
                da interface que o usuário utiliza até a lógica, os dados
                e as integrações que fazem tudo acontecer.
              </p>

              <p>
                Minha experiência com{" "}
                <strong className="font-medium text-white">
                  suporte técnico e manutenção de equipamentos
                </strong>{" "}
                me ensinou a investigar problemas, buscar soluções práticas
                e prestar atenção aos detalhes. Hoje aplico essa mesma
                mentalidade no desenvolvimento de software.
              </p>

              <p>
                Já desenvolvi aplicações envolvendo{" "}
                <strong className="font-medium text-white">
                  gestão de negócios, pagamentos via Pix, autenticação,
                  bancos de dados e APIs.
                </strong>{" "}
                Trabalho principalmente com TypeScript, React e Next.js,
                enquanto amplio meus conhecimentos em Go para o
                desenvolvimento de serviços e backend.
              </p>

              <p>
                Estou em busca de uma oportunidade como{" "}
                <strong className="font-medium text-white">
                  Desenvolvedor Júnior
                </strong>{" "}
                para colaborar com uma equipe, aprender com desafios reais
                e contribuir para a construção de produtos bem desenvolvidos.
              </p>
            </div>

            {/* Destaques */}
            <div className="grid grid-cols-1 border-t border-white/10 sm:grid-cols-3">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`flex items-start gap-3 p-5 sm:p-6 ${
                      index !== 0
                        ? "border-t border-white/10 sm:border-t-0 sm:border-l"
                        : ""
                    }`}
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.05]">
                      <Icon className="size-4 text-zinc-300" />
                    </div>

                    <div>
                      <p className="text-xs text-zinc-500">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* PROCESSO */}
        <div className="mt-28 sm:mt-36">
          <Reveal className="mb-14 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-zinc-400">
              <CheckCircle2 className="size-3.5" />
              Meu processo
            </div>

            <h3 className="text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">
              Da ideia à{" "}
              <span className="text-zinc-500">solução.</span>
            </h3>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
              Cada projeto traz desafios diferentes. Esta é a forma
              como costumo organizar o desenvolvimento.
            </p>
          </Reveal>

          {/* TIMELINE */}
          <div className="relative">
            {/* Linha central desktop */}
            <div className="absolute top-5 bottom-5 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent md:block" />

            {/* Linha lateral mobile */}
            <div className="absolute top-5 bottom-5 left-4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:hidden" />

            <div className="space-y-8 md:space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isRight = index % 2 !== 0;

                return (
                  <Reveal
                    key={step.number}
                    className="relative grid grid-cols-[32px_minmax(0,1fr)] gap-5 md:grid-cols-[1fr_48px_1fr] md:gap-5"
                  >
                    {/* Indicador mobile */}
                    <div className="relative flex justify-center pt-7 md:hidden">
                      <span className="relative z-10 size-3 rounded-full border-2 border-white bg-black" />
                    </div>

                    {/* Lado esquerdo desktop */}
                    <div
                      className={`hidden md:block ${
                        isRight ? "" : "md:pr-4"
                      }`}
                    >
                      {!isRight && <StepCard step={step} Icon={Icon} />}
                    </div>

                    {/* Indicador desktop */}
                    <div className="relative hidden justify-center pt-8 md:flex">
                      <div className="relative z-10 flex size-9 items-center justify-center rounded-full border border-white/20 bg-black">
                        <span className="size-2 rounded-full bg-white" />
                      </div>
                    </div>

                    {/* Lado direito desktop / card mobile */}
                    <div className={isRight ? "md:pl-4" : "md:hidden"}>
                      <StepCard step={step} Icon={Icon} />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <Reveal className="mt-24 text-center sm:mt-32">
          <div className="mx-auto max-w-2xl border-t border-white/10 pt-12">
            <p className="text-sm text-zinc-500">
              Quer conhecer meu trabalho na prática?
            </p>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              O código conta uma parte.
              <br />
              <span className="text-zinc-500">
                Os projetos mostram o restante.
              </span>
            </h3>

            <a
              href="#projetos"
              className="group mt-7 inline-flex h-12 items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-semibold text-black transition-all hover:bg-zinc-200"
            >
              Conhecer meus projetos
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StepCard({
  step,
  Icon,
}: {
  step: (typeof steps)[number];
  Icon: typeof BrainCircuit;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d] p-5 transition-all duration-300 hover:border-white/20 hover:bg-[#111111] sm:p-7">
      <div className="mb-6 flex items-start justify-between gap-3">
        <div className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
          <Icon className="size-5 text-zinc-300" />
        </div>

        <span className="text-3xl font-semibold tracking-tight text-white/10">
          {step.number}
        </span>
      </div>

      <h4 className="text-lg font-semibold tracking-tight text-white">
        {step.title}
      </h4>

      <p className="mt-3 text-sm leading-7 text-zinc-400">
        {step.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {step.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[11px] text-zinc-500"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}