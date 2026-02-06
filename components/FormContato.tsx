"use client"
import { useFieldArray, useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { formcontatoSchema, FormContatoSchema } from "@/app/schema/formcontatoschema"
import { zodResolver } from "@hookform/resolvers/zod"
import { createContato } from "@/app/actions/createcontato"
import { toast } from "sonner"


export function FormContato(){
    const form = useForm<FormContatoSchema>({
        resolver: zodResolver(formcontatoSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        }
    })
    async function handlecontato(data: FormContatoSchema){
        const res = await createContato(data)
        if(res.error){
            form.reset()
            return  toast.error(res.error)
        }
        form.reset()
        toast.success("Mensagem enviada com sucesso")
    }
    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handlecontato)} className="w-full space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Joao Santos" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />

                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Gmail</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="ex: Joaosantos7236@gmail.com" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />

                    <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Descrição</FormLabel>
                            <FormControl>
                                <Textarea
                                className="h-40 resize-none"
                                {...field} placeholder="ex: Estou pensando em criar um micro saas....." />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit">Enviar</Button>

            </form>
        </Form>
    )
}