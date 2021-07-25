import { inputVolunteer, Volunteer } from "../model/Volunteer";
import sendEmailToNewPass from "./EmailBusiness";


class VolunteerBusiness {

    async SendEmailVolunteer(input: inputVolunteer): Promise<string> {

        if (!input.email) {
            throw new Error("Email não passado");
        }
        await sendEmailToNewPass(
            new Volunteer(
                input.name,
                input.obs,
                input.birthday,
                input.cpf,
                input.rg,
                input.expeditor,
                input.address,
                input.email,
                input.cellphone,
                input.phone,
                input.department,
                input.hours,
                input.acordo1,
                input.acordo2,
                input.acordo3,
                input.acordo4
            )
        );
        
        return `Enviamos o para nosso gestor suas informações , ${input.name}`;
    }

}
export default VolunteerBusiness

// import { Request, Response } from "express";
// import { writeEmail } from "../services/mailer";

// export async function VolunteerBusiness(req: Request, res:Response){
//     // let errorCode: number = 400;
//     try {
//         // const email = "gabrielmina118@gmail.com"
//         // const name = req.body.name

//         // await writeEmail({
//         //     from: "Admin <admin@email.com.br>",
//         //     to: email,
//         //     subject: "Novo Voluntário(a)",
//         //     text: "Dados do formulário",
//         //     html: `<p>Olá, eu sou ${name}.</p>`
//         //     // html: `<p>Olá, ${user[0].name}. Alteramos sua senha. Sua nova senha é ${password}.</p>`
//         // })

//         // res.status(200).send({message: "Dados do formulário enviados com sucesso"});


//     } catch (error) {
//         res.status(error.statusCode || 400).send({ error: error.message });
//         // res.status(errorCode).send({message: error.message})
//     }

// }