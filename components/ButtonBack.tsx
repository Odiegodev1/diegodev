"use client"
import { redirect } from "next/navigation";
import { Button } from "./ui/button";

export function ButtonBack(){
    async function handleClick() {
        redirect("/")
    }
    return(
        <Button onClick={handleClick} className="mt-5">
            Voltar
        </Button>
    )
}