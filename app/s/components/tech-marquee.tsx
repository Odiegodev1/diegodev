import { Marquee } from "@/components/ui/marquee";

const technologies = [
  {
    name: "React",
    icon: "devicon-react-original colored",
  },
  {
    name: "Next.js",
    icon: "devicon-nextjs-plain",
  },
  {
    name: "TypeScript",
    icon: "devicon-typescript-plain colored",
  },
  {
    name: "JavaScript",
    icon: "devicon-javascript-plain colored",
  },
  {
    name: "Go",
    icon: "devicon-go-original colored",
  },
  {
    name: "Node.js",
    icon: "devicon-nodejs-plain colored",
  },
  {
    name: "PostgreSQL",
    icon: "devicon-postgresql-plain colored",
  },
  {
    name: "Prisma",
    icon: "devicon-prisma-original",
  },
  {
    name: "Tailwind CSS",
    icon: "devicon-tailwindcss-original colored",
  },
  {
    name: "Docker",
    icon: "devicon-docker-plain colored",
  },
  {
    name: "Git",
    icon: "devicon-git-plain colored",
  },
  {
    name: "Python",
    icon: "devicon-python-plain colored",
  },
];

export default function TechMarquee() {
  return (
    <div className="relative w-full max-w-4xl overflow-hidden">
      {/* Título */}
      <div className="mb-6 text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
          Tecnologias & ferramentas
        </p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <Marquee
          pauseOnHover
          repeat={4}
          className="[--duration:28s] [--gap:1rem]"
        >
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="
                group
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-white/[0.08]
                bg-white/[0.035]
                px-5
                py-3.5
                transition-all
                duration-300
                hover:border-white/20
                hover:bg-white/[0.08]
              "
            >
              <i
                aria-hidden="true"
                className={`${tech.icon} text-[26px] transition-transform duration-300 group-hover:scale-110`}
              />

              <span className="whitespace-nowrap text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">
                {tech.name}
              </span>
            </div>
          ))}
        </Marquee>

        {/* Gradiente esquerdo */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-black to-transparent sm:w-24" />

        {/* Gradiente direito */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-black to-transparent sm:w-24" />
      </div>
    </div>
  );
}