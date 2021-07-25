import { Request, Response } from "express";
import VolunteerBusiness from "../business/VolunteerBusiness";
import BaseDataBase from "../data/BaseDatabase";
import { inputVolunteer } from "../model/Volunteer";

class VolunteerController {

    async sendMail(req: Request, res: Response) {
        try {
            const input:inputVolunteer = {
                name: req.body.name,
                obs: req.body.obs,
                birthday: req.body.birthday,
                cpf: req.body.cpf,
                rg: req.body.rg,
                expeditor: req.body.expeditor,
                address: req.body.address,
                email: req.body.email,
                cellphone: req.body.cellphone,
                phone: req.body.phone,
                department: req.body.department,
                hours: req.body.hours,
                acordo1: req.body.acordo1,
                acordo2: req.body.acordo2,
                acordo3: req.body.acordo3,
                acordo4: req.body.acordo4
            }


            const volunteerBusiness = new VolunteerBusiness()

            const message = await volunteerBusiness.SendEmailVolunteer(input)

            res.status(200).send({ message })
        } catch (error) {
            res.status(error.statusCode || 400).send({ error: error.message });
        } finally {
            await BaseDataBase.destroyConnection();
        }
    }

}

export { VolunteerController }