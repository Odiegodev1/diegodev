import { BorderBeam } from "@/components/ui/border-beam"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Iphone } from "@/components/ui/iphone"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { Ripple } from "@/components/ui/ripple"
import { projects } from "@/lib/utils"
import { getTechSvgs } from "@/components/utils";
import { span } from "motion/react-client"
import Link from "next/link"
import { Github, Link2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation"
import { ButtonBack } from "@/components/ButtonBack"

export default async function Project({
    params
}: {
    params: Promise<{ slug: string }>
}

){
    const { slug } = await params
    const projeto =  projects.find((projeto) => projeto.id === Number(slug))
    if(!projeto){
        return(
            <div>
                <h1>Projeto nao encontrado</h1>
            </div>
        )
    }
    
    
    return(
        <div  className="w-full h-full flex mx-auto max-w-[1150]  mb-20 ">
            <ButtonBack />
             <div className="md:flex p-4  w-full mt-20  gap-4 items-start justify-between">
                
                 <Card className="w-full py-0 bg-background relative overflow-hidden">
                    
                
                    <div className=" bg-background relative flex md:h-[600] p-4 w-full flex-col items-center justify-center ">
      <div className="z-10 text-center  font-medium tracking-tighter whitespace-pre-wrap text-white">
   <div className="md:w-[220] w-[180]">
        <Iphone src={projeto.imageSrc2} />
   </div>
      </div>
      <Ripple />
    </div>
    <CardContent className="bg-accent rounded-t-md border-t-3">
<div className="mb-4">
    <div className="mb-2"><h1 className="md:text-4xl text-2xl font-semibold">{projeto.label}</h1>
   
    </div>
    <p className="md:text-xl text-zinc-500">{projeto.description}</p>
   
</div>
<div className="grid md:grid-cols-9 grid-cols-5 items-center  gap-4 mb-5">
      {getTechSvgs(projeto.tech as any).map((tech) => (
        <span key={tech.label}>{tech.svg}</span>
    ))}
</div>
    </CardContent>
             
                <BorderBeam
                duration={8}
                size={450}
                />
              </Card>
              <Card className="md:w-1/2 md:mt-0 mt-4  ">
                <CardContent>
                    <CardTitle>{projeto.label}</CardTitle>
                    <div className="space-y-2.5  mt-4 ">
                        <Link href={projeto.url} className="flex items-center gap-2 bg-blue-500/30 border border-blue-500 rounded-md py-2 px-1.5">
                         <Link2 /> ver projeto
                        </Link>

                        <Link href={projeto.github as any} className="flex items-center gap-2 bg-zinc-500/30 border border-zinc-500 rounded-md py-2 px-1.5">
                         <Github /> Code GitHub
                        </Link>
                    </div>
                </CardContent>
                
              </Card>

             </div>
        </div>
    )
}