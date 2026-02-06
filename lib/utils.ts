import { clsx, type ClassValue } from "clsx"
import { h1 } from "motion/react-client";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type svgtech = {
  label: string;
  svg: React.ReactNode
}

export type Project = {
  id: number;
  label: string;
  description: string;
  imageSrc: string;
  imageSrc2?: string;
  url: string;
  github?: string
  tech?: string[]
}

 export const projects: Project[] = [
        {
            id: 1,
            label: "Agenda Pro",
            description: "Agenda Pro simplifica o agendamento de serviços, oferecendo uma experiência rápida e organizada para clientes e administradores, com controle total da agenda em tempo real.",
            imageSrc: "/Screenshot_11.png",
            imageSrc2: "/Screenshot_2.png",
            url: "https://agenda-pro-beta.vercel.app/",
            github:"https://github.com/Odiegodev1/Agenda-Pro",
            tech:[ "Next.js", "Tailwind CSS", "TypeScript", "PostgreSQL","Github","Prisma ORM"]
         
          
            
        },
         {
            id:2,
            label: "Campus dev",
            description: "é uma plataforma voltada para desenvolvedores, criada para organizar estudos, projetos e evolução técnica em um ambiente simples, moderno e focado em produtividade",
            imageSrc: "/campusdev.png",
            imageSrc2: "/campusdev2.png",
            url: "https://campus-dev-alpha.vercel.app/",
            github:"https://github.com/Odiegodev1/CampusDev",
             tech:[ "Next.js", "Tailwind CSS", "TypeScript", "PostgreSQL","Github","Prisma ORM"]
        },
        {
            id: 3,
            label: "Reparo pro",
            description: "Reparo Pro e uma plataforma voltada para reparos de celulares, oferecendo uma experiência intuitiva e eficiente para os clientes e profissionais de reparo.",
            imageSrc: "/reparo.png",
            imageSrc2: "/reparo2.png",
            url: "https://reparo-pro.vercel.app/",
            github:"https://github.com/Odiegodev1/ReparoPro",
             tech:[ "Next.js", "Tailwind CSS", "TypeScript", "PostgreSQL","Github","Prisma ORM"]
            
        }
       
    ]


  