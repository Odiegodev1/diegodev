"use client"
import { Github, Instagram, Linkedin } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { FormContato } from "./FormContato";
import React from "react";
import { div } from "motion/react-client";
import Link from "next/link";
type navlinkPros = {
    link: string,
    icon: React.ReactNode
}
export function CardContato(){
    const navlink: navlinkPros[] = [
        {
            icon: <Github />,
            link: "https://github.com/odiegodev1"
        },
        {
            icon: <Instagram />,
            link: "https://www.instagram.com/odiegodev/"
        },
        {
            icon: <Linkedin />,
            link: "https://www.linkedin.com/in/odiego-mendes/"
        }
    ]
    function renderlink(navlink: navlinkPros[]){
        return(
            navlink.map((link, index) => {
                return(
                   <Link key={index} href={link.link}
                   className="cursor-none size-10 bg-background flex items-center justify-center border rounded-md hover:scale-110"
                   >
                       {link.icon}
                   </Link>
                )
            })
         
        )
    }
    return(
        <Card className="m-4">
            <CardContent>
                <div className="w-full md:flex  max-w-4xl mx-auto gap-20">
                    <div className="space-y-3.5 w-full max-w-xl">
                        <Avatar className="size-40">
                            <AvatarImage src="https://github.com/odiegodev1.png" />
                        </Avatar>
                        <div className="space-y-1.5 md:mt-0 py-4">
                            <span className="text-zinc-400">Contato</span>
                            <h1 className="text-3xl font-bold line-clamp-2">Gostou do meu trabalho? Vamos trabalhar juntos!</h1>
                            <p className="text-zinc-600 mb-2">Estou sempre aberta a um bate-papo. Mande um e-mail para <span>odiegodev10@gmail.com</span> ou me chame nas redes sociais.</p>
                            <div className="grid grid-cols-3 w-40">
                              {renderlink(navlink)}

                            </div>
                        </div>
                    </div>
                    <FormContato />
                </div>
            </CardContent>
        </Card>
    )
}