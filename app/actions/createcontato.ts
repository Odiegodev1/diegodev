"use server"
import { Resend } from "resend";

const resend =  new Resend(process.env.RESEND_API_KEY);

import { FormContatoSchema } from "../schema/formcontatoschema";

export async function createContato(data: FormContatoSchema) {
    if(!data){
        return{
            data: null,
            error: "Dados não encontrados"
        }
    }

    try{
        const resende = await resend.emails.send({
            from: "Portfólio <onboarding@resend.dev>",
            to: ["odiegodev10@gmail.com"],
            replyTo: data.email,
            subject: `Contato do site ${data.name}`,
            html: `
            <p><strong>Nome:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Mensagem:</strong> ${data.message}</p>
            `
        ,
        })

        return{
            data: resende,
            error: null
        }
      
    }catch(error){
        return{
            data: null,
            error: "Erro ao enviar email"
        }
    }
}