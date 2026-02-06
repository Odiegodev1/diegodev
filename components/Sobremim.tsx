import { div } from "motion/react-client";
import { MagicCard } from "./ui/magic-card";
import { BorderBeam } from "./ui/border-beam";
import { Card } from "./ui/card";
import { Globe } from "./ui/globe";
import { AvatarCircles } from "./ui/avatar-circles";
import { Avatar, AvatarImage } from "./ui/avatar";
import { TextAnimate } from "./ui/text-animate";

export  function Sobremim(){
    return(
      <div className="w-full">
        
        <Card className="bg-background md:flex hidden items-start  relative w-full rounded-md overflow-hidden">
         <div className="flex relative w-full items-start gap-50">
               <div className=" relative  flex size-full max-w-lg  items-center justify-center  rounded-lg   pt-10 md:pb-60">
      <div className="flex items-center flex-col">
         <Avatar className="size-30 border border-accent">
            <AvatarImage src="https://github.com/odiegodev1.png" />
        </Avatar>
        <h1 className="text-3xl font-black">Diego Mendes</h1>
        <p className="text-zinc-400">Desenvolvedor Front-End</p>
      </div>

        

      <Globe className="top-60" />
      
         </div>

         <div className="mt-10 pl-4 space-y-2 text-zinc-400">
            <TextAnimate className="text-xl" animation="blurIn" duration={4} as="h1" delay={1}>
      Sou Diego Mendes, desenvolvedor Frontend com foco na criação de interfaces web modernas, responsivas e centradas na experiência do usuário. Trabalho principalmente com React, Next.js e Tailwind CSS, aplicando boas práticas de organização, performance e usabilidade.
    </TextAnimate>
    <TextAnimate animation="slideUp" by="word" duration={4} delay={3.2}>
      Tenho experiência no desenvolvimento de projetos acadêmicos e pessoais, onde busco transformar ideias em soluções funcionais, com código limpo e atenção aos detalhes. Estou em constante aprendizado e interessado em evoluir tecnicamente por meio de novos desafios e projetos.
    </TextAnimate>

         </div>
         </div>

       
         <BorderBeam
        duration={6}
        delay={3}
        size={400}
        borderWidth={2}
        className="from-transparent via-blue-500 to-transparent"
      />
        </Card>

      </div>
    )
}