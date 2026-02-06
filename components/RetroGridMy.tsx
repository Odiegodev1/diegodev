import { RetroGrid } from "./ui/retro-grid";
import { TypingAnimation } from "./ui/typing-animation";
import { MorphingText } from "./ui/morphing-text";
import { DockDemo } from "./icons";

export function RetroGridMy() {
  return (
    <div
      className="
        bg-background relative flex min-h-screen w-full
        flex-col items-center justify-center
        overflow-hidden rounded-lg
        px-4 sm:px-6
       
      "
    >
      <span className="z-10 flex flex-col md:items-start w-full max-w-5xl text-center">
        {/* Intro */}
        <h1 className="text-sm sm:text-base md:text-lg mb-2">
          Hi 👋, my name is{" "}
          <TypingAnimation>Diego Mendes</TypingAnimation>
        </h1>

        {/* Title + Dock */}
        <div
          className="
            flex flex-col md:flex-row
            items-center md:items-start
            justify-center
            gap-4 md:gap-6
          "
        >
          <h1
            className="
              bg-gradient-to-b from-black to-gray-300/80
              bg-clip-text text-transparent
              dark:from-white dark:to-slate-900/10
              font-black leading-none
              text-4xl sm:text-5xl md:text-7xl lg:text-8xl
            "
          >
            FRONTEND
          </h1>

          <div className="scale-90 sm:scale-100">
            <DockDemo />
          </div>
        </div>

        {/* Morphing text */}
        <div className="mt-4  md:flex hidden  sm:mt-6">
          <MorphingText
            texts={[
              "Developer",
              "Programmer",
              "Software",
              "Full Stack",
              "Freelancer",
              "Clean",
            ]}
          />
        </div>
      </span>

      <RetroGrid cellSize={120} />
    </div>
  );
}
