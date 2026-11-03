"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { ArrowUpRight, Bolt, Menu, X } from "lucide-react";

import { LiquidGlassCard } from "@/components/uilayouts/liquid-glass";

const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export default function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6"
    >
      <motion.div
        animate={{
          maxWidth: scrolled ? 850 : 1024,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="mx-auto w-full"
      >
        <LiquidGlassCard
          glowIntensity="md"
          shadowIntensity="lg"
          borderRadius="24px"
          blurIntensity="sm"
          className="w-full p-3 sm:px-5 sm:py-4"
        >
          <div className="relative z-30 flex w-full items-center justify-between gap-4">
            {/* Logo */}
            <a
              href="#inicio"
              onClick={() => setIsOpen(false)}
              className="flex min-w-0 items-center gap-2.5"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10">
                <Bolt className="size-4 text-white" />
              </div>

              <div className="flex flex-col leading-none">
                <span className="text-sm font-semibold tracking-tight text-white sm:text-base">
                  Diego Santos
                </span>

                <span className="mt-1 text-[10px] tracking-wider text-zinc-400">
                  SOFTWARE DEVELOPER
                </span>
              </div>
            </a>

            {/* Navegação desktop */}
            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-1 md:flex"
            >
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA desktop */}
            <a
              href="#contato"
              className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-xs font-medium text-white transition-all hover:bg-white/20 lg:inline-flex"
            >
              Fale comigo
              <ArrowUpRight className="size-3.5" />
            </a>

            {/* Botão mobile */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
            >
              {isOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>

          {/* Menu mobile */}
          <AnimatePresence>
            {isOpen && (
              <motion.nav
                id="mobile-navigation"
                aria-label="Navegação mobile"
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                }}
                className="relative z-30 overflow-hidden md:hidden"
              >
                <div className="mt-4 flex flex-col gap-1 border-t border-white/10 pt-4">
                  {navigation.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {item.label}

                      <ArrowUpRight className="size-4 text-zinc-500" />
                    </a>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </LiquidGlassCard>
      </motion.div>
    </motion.header>
  );
}