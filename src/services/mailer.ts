import SMTPTransport = require("nodemailer/lib/smtp-transport");
import nodemailer from "nodemailer";
import Mail = require("nodemailer/lib/mailer");
import { mailTemplate } from "../model/mail"

export const config: SMTPTransport.Options ={
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "bf68b5de21463a",
        pass: "37a302f502122a"
        // user: process.env.NODEMAILER_USER,
        // pass: process.env.NODEMAILER_PASS
    }
}

let transporter: Mail = nodemailer.createTransport(config)

export async function writeEmail(mail: mailTemplate) {

    let mailContent: Mail.Options = {
        from: mail.from,
        to: mail.to,
        subject: mail.subject,
        text: mail.text,
        html: mail.html
    }

    transporter.sendMail(mailContent, (error: Error | null, info: any)=>{
        if(error){
            throw new Error(error.message)
        }else{
            console.log(`E-mail enviado para ${mailContent.to}!`)
        }
    })

}