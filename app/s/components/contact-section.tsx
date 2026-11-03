"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

const EMAIL = "odiegodev10@gmail.com";

const contacts = [
  {
    name: "Gmail",
    username: EMAIL,
    description: "Para propostas, projetos e oportunidades.",
    href: `mailto:${EMAIL}?subject=${encodeURIComponent(
      "Contato pelo portfólio"
    )}`,
    icon: Mail,
    action: "Enviar e-mail",
  },
  {
    name: "LinkedIn",
    username: "/in/odiegodev1",
    description: "Vamos nos conectar profissionalmente.",
    href: "https://www.linkedin.com/in/odiegodev1/",
    icon: Linkedin,
    action: "Ver perfil",
  },
  {
    name: "GitHub",
    username: "@Odiegodev1",
    description: "Explore meus projetos e repositórios.",
    href: "https://github.com/Odiegodev1",
    icon: Github,
    action: "Ver projetos",
  },
];

export default function ContactSection() {
  const reduceMotion = useReducedMotion();

  return (
    <footer
      id="contato"
      className="relative z-10 scroll-mt-24 overflow-hidden bg-black text-white"
    >
      {/* Iluminação */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute bottom-[-350px] left-1/2 h-[600px] w-[800px] max-w-[150vw] -translate-x-1/2 rounded-full bg-white/[0.045] blur-[130px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(255,255,255,0.025),transparent_65%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 pt-28 sm:px-8 sm:pt-36">
        {/* Cabeçalho */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
            <div className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-30" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </div>

            <span className="text-xs font-medium text-zinc-400">
              Aberto a oportunidades
            </span>
          </div>

          {/* Título */}
          <h2 className="max-w-4xl text-[clamp(2.7rem,7vw,6rem)] font-semibold leading-[1.05] tracking-[-0.07em]">
            Vamos conversar
            <br />

            <span className="bg-gradient-to-b from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
              sobre o próximo passo?
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            Estou aberto a oportunidades como desenvolvedor,
            colaborações e novos projetos. Se meu trabalho chamou
            sua atenção, será um prazer conversar.
          </p>

          {/* E-mail principal */}
          <a
            href={`mailto:${EMAIL}?subject=${encodeURIComponent(
              "Contato pelo portfólio"
            )}`}
            className="group mt-9 inline-flex max-w-full items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.03] hover:bg-zinc-200 sm:px-8 sm:py-4"
          >
            <Mail className="size-4" />

            Enviar um e-mail

            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        {/* Cards de contato */}
        <div className="mt-20 grid grid-cols-1 gap-4 sm:mt-24 md:grid-cols-3">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <motion.a
                key={contact.name}
                href={contact.href}
                target={
                  contact.href.startsWith("mailto:")
                    ? undefined
                    : "_blank"
                }
                rel={
                  contact.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 30 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0d0d0d] p-6 transition-colors duration-300 hover:border-white/20 hover:bg-[#141414]"
              >
                {/* Topo */}
                <div className="flex items-start justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.045] transition-colors group-hover:bg-white/10">
                    <Icon
                      className="size-5 text-zinc-300"
                      strokeWidth={1.7}
                    />
                  </div>

                  <ArrowUpRight className="size-4 text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </div>

                {/* Informações */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold tracking-tight text-white">
                    {contact.name}
                  </h3>

                  <p className="mt-2 break-all text-xs text-zinc-500">
                    {contact.username}
                  </p>

                  <p className="mt-5 min-h-12 text-sm leading-6 text-zinc-400">
                    {contact.description}
                  </p>
                </div>

                {/* Ação */}
                <div className="mt-7 flex items-center gap-2 border-t border-white/[0.07] pt-5 text-xs font-medium text-zinc-300 transition-colors group-hover:text-white">
                  {contact.action}

                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Frase */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center sm:mt-32"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
            Obrigado pela visita
          </p>

          <p className="mt-5 text-xl font-medium tracking-tight text-zinc-400 sm:text-2xl">
            Código é o que eu escrevo.
            <br />
            <span className="text-white">
              Soluções são o que eu quero construir.
            </span>
          </p>
        </motion.div>

        {/* Footer inferior */}
        <div className="mt-24 border-t border-white/10 py-8 sm:mt-32">
          <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            {/* Identidade */}
            <a href="#inicio" className="group">
              <p className="text-sm font-semibold tracking-tight text-white">
                Diego Santos<span className="text-zinc-500">.</span>
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                Desenvolvedor Full Stack
              </p>
            </a>

            {/* Navegação */}
            <nav
              aria-label="Navegação do rodapé"
              className="flex flex-wrap justify-center gap-x-6 gap-y-3"
            >
              {[
                { label: "Início", href: "#inicio" },
                { label: "Sobre", href: "#sobre" },
                { label: "Projetos", href: "#projetos" },
                { label: "Contato", href: "#contato" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs text-zinc-500 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Localização */}
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <MapPin className="size-3.5" />
              Saquarema, RJ
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 text-center text-xs text-zinc-600 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Diego Santos.
            </p>

            <p>Desenvolvido com Next.js & TypeScript.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}