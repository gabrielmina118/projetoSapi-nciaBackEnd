import { Request, Response } from "express";
import { writeEmail } from "../services/mailer";

export async function VolunteerBusiness(req: Request, res:Response){
    let errorCode: number = 400;
    try {
        const email = "rafaelgf@gmail.com"
        const name = req.body

        await writeEmail({
            from: "Admin <admin@email.com.br>",
            to: email,
            subject: "Novo Voluntário(a)",
            text: "Dados do formulário",
            html: `<p>Olá, eu sou ${name}.</p>`
            // html: `<p>Olá, ${user[0].name}. Alteramos sua senha. Sua nova senha é ${password}.</p>`
        })

        res.status(200).send({message: "Dados do formulário enviados com sucesso"});

    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }

}