import { desc, div } from "motion/react-client";
import { Iphone } from "./ui/iphone";
import { Safari } from "./ui/safari";
import { MagicCard } from "./ui/magic-card";
import { RainbowButton } from "./ui/rainbow-button";
import { projects } from "@/lib/utils";
import Link from "next/link";
import { Pointer } from "./ui/pointer";

export function Cardmyproject(){
   const projeto = projects
   console.log(projeto)
    return(
        <div className="grid md:grid-cols-2 px-4 gap-10 w-full mt-10 mb-40">
           {projeto.map((projet) => (
             <MagicCard key={projet.id} className="p-10 cursor-none rounded-md w-full">
                 
                <div>
                     <Safari className="cursor-none"
                     
                     imageSrc={projet.imageSrc}/>
                </div>
                <div className="mt-4 space-y-2.5 cursor-none">
                    <h1 className="text-4xl font-semibold">{projet.label}</h1>
                    <p className="text-xl text-zinc-600">{projet.description}</p>
                   <Link className="cursor-none" href={`/project/${projet.id}`}><RainbowButton className="mt-4 cursor-none">Ver Projeto</RainbowButton></Link>
                </div>
            </MagicCard>
           ))}
          
            
        </div>
    )
}