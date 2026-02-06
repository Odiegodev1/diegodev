import { Cadrmyskill } from "@/components/Cadrmyskill";
import { CardContato } from "@/components/CardContato";
import { Cardmyproject } from "@/components/Cardmyproject";
import { DockDemo } from "@/components/icons";
import { RetroGridMy } from "@/components/RetroGridMy";
import { Sobremim } from "@/components/Sobremim";

import { Pointer } from "@/components/ui/pointer";
import { RetroGrid } from "@/components/ui/retro-grid";
import { div } from "motion/react-client";
import Image from "next/image";

export default function Home() {
  return (
   <div className="flex flex-col mx-auto min-h-screen w-full">
      <section className="flex-1 flex-col flex items-center justify-center  w-full">
          <RetroGridMy />
          <div
          
          className="absolute bottom-0 mb-15 w-5 h-10 border rounded-2xl flex items-start py-3 justify-center"
          >
            <span className="size-2 animate-bounce  rounded-full bg-amber-50"></span>
            
          </div>
          
      </section>

      <section className="w-full mb-20 space-y-7.5 mx-auto max-w-[1450]">
        <h1 className="mt-10 md:flex hidden text-4xl font-bold px-4">Sobre Mim</h1>
        <Sobremim />
        <h1 className="mt-10 text-4xl font-bold px-4">Minhas Habilidades</h1>
        <Cadrmyskill />
         <h1 className="mt-10 text-4xl font-bold px-4 ">Meus Projetos</h1>
        <Cardmyproject />
        <h1 className="mt-10 text-4xl font-bold px-4 ">Contato</h1>
        <CardContato />
      </section>
      <Pointer>
          <div className="text-2xl">👆🏾</div>
        </Pointer>
   </div>
  );
}
