import dotenv from 'dotenv'
import {  Volunteer } from '../model/Volunteer';
import { Transporter } from '../services/Transporter';


dotenv.config()
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export default async function sendEmailToNewPass(volunter: Volunteer) {


    const transporter = new Transporter();

    await transporter.transporter.sendMail({
        from: `<${process.env.NODEMAILER_USER}>`,
        to: "gabrielmina118@gmail.com",
        subject: `Informações de um novo Voluntário`,
        text: `
            '${volunter.getName()}', 
            '${volunter.getPhone()}',
            '${volunter.getEmail()}',
            '${volunter.getCellphone()}', 
            '${volunter.getDepartment()}',
            '${volunter.getObs()}',
            '${volunter.getBirthday()}',
            '${volunter.getCpf()}',
            '${volunter.getRg()}',
            '${volunter.getExpeditor()}',
            '${volunter.getAddress()}',                      
            '${volunter.getHours()}',
            '${volunter.getAcordo1()}',
            '${volunter.getAcordo2()}',
            '${volunter.getAcordo3()}',
            '${volunter.getAcordo4()}'
            `,
        html: `
            Nome: '${volunter.getName()}' <br><br> 
            Email: '${volunter.getEmail()}'<br><br>
            Telefone: '${volunter.getCellphone()}'<br><br>
            Celular: '${volunter.getPhone()}'<br><br>
            Endereço: '${volunter.getAddress()}'<br><br>       
            Observação: '${volunter.getObs()}'<br><br>
            Aniversário: '${volunter.getBirthday()}'<br><br>
            Cpf: '${volunter.getCpf()}'<br><br>
            RG: '${volunter.getRg()}'<br><br>
            Orgão Expedidor: '${volunter.getExpeditor()}'<br><br>               
            Departamento do voluntário: '${volunter.getDepartment()}'<br><br>
            Tem de dedicar ao Sapiência: '${volunter.getHours()}'<br><br>
            Acordo 1: '${volunter.getAcordo1()}'<br><br>
            Acordo 2: '${volunter.getAcordo2()}'<br><br>
            Acordo 3: '${volunter.getAcordo3()}'<br><br>
            Acordo 4: '${volunter.getAcordo4()}'<br><br>
        `
    })

}