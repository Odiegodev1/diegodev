import {z} from "zod";

export const formcontatoSchema = z.object({
    name: z.string().min(1, { message: "O nome é obrigatório" }),
    email: z.string().min(1, { message: "O email é obrigatório" }),
    message: z.string().min(10, { message: "A mensagem é obrigatória" }),
});

export type FormContatoSchema = z.infer<typeof formcontatoSchema>;