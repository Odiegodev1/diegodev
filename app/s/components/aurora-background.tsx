"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

export default function AuroraBackground() {
  const reduceMotion = useReducedMotion();

  const turbulenceRef = useRef<SVGFETurbulenceElement>(null);
  const displacementRef = useRef<SVGFEDisplacementMapElement>(null);

  useEffect(() => {
    if (reduceMotion) return;

    let frameId: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const time = (timestamp - startTime) / 1000;

      // Ondulação horizontal e vertical
      const frequencyX =
        0.008 + Math.sin(time * 0.65) * 0.003;

      const frequencyY =
        0.012 + Math.cos(time * 0.5) * 0.004;

      // Intensidade da deformação
      const displacement =
        35 + Math.sin(time * 0.9) * 18;

      turbulenceRef.current?.setAttribute(
        "baseFrequency",
        `${frequencyX} ${frequencyY}`
      );

      displacementRef.current?.setAttribute(
        "scale",
        displacement.toString()
      );

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [reduceMotion]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden bg-black"
    >
      {/* FILTRO SVG — DEFORMAÇÃO DAS ONDAS */}
      <svg
        className="absolute h-0 w-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            id="aurora-distortion"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              ref={turbulenceRef}
              type="fractalNoise"
              baseFrequency="0.008 0.020"
              numOctaves="2"
              seed="3"
              result="noise"
            />

            <feDisplacementMap
              ref={displacementRef}
              in="SourceGraphic"
              in2="noise"
              scale="45"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* AURORA PRINCIPAL */}
      <motion.div
        className="absolute inset-x-[-15%] md:top-[-1%] top-[-0.7%] md:h-[95vh] h-[205vh]"
        style={{
          filter: reduceMotion
            ? "none"
            : "url(#aurora-distortion)",
        }}
        animate={
          reduceMotion
            ? {}
            : {
                x: ["-5%", "4%", "-3%", "5%", "-5%"],
                y: [0, 18, -12, 10, 0],
                scaleX: [1, 1.12, 0.94, 1.08, 1],
                scaleY: [1, 0.94, 1.08, 0.96, 1],
              }
        }
        transition={{
          duration: 9,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage: "url('/aurora-bg.png')",
          }}
        />
      </motion.div>

      {/* SEGUNDA ONDA — PROFUNDIDADE */}
      <motion.div
        className="absolute inset-x-[-15%] top-[-10%] h-[80vh] opacity-20"
        style={{
          backgroundImage: "url('/aurora-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          scaleX: -1,
        }}
        animate={
          reduceMotion
            ? {}
            : {
                x: ["4%", "-5%", "3%", "4%"],
                y: [-15, 15, -8, -15],
                scaleY: [1, 1.12, 0.94, 1],
                opacity: [0.12, 0.28, 0.16, 0.12],
              }
        }
        transition={{
          duration: 7,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* LUZ CENTRAL */}
      <motion.div
        className="absolute left-1/2 top-[-180px] h-[450px] w-[80%] -translate-x-1/2 rounded-full bg-white/10 blur-[120px]"
        animate={
          reduceMotion
            ? {}
            : {
                opacity: [0.08, 0.22, 0.12, 0.08],
                scaleX: [1, 1.35, 0.85, 1],
                scaleY: [1, 0.8, 1.15, 1],
              }
        }
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* TRANSIÇÃO PARA PRETO */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black" />
    </div>
  );
}