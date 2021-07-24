import { Request, Response } from "express";
import { StudentBusiness } from "../business/StudentBusiness";
import { IdGenerator } from "../services/IdGenerator";
import { StudentDatabase } from "../data/StudentDatabase";


const studentBusiness =
   new StudentBusiness(new IdGenerator(),
      new StudentDatabase());

export class StudentController {

   public async createStudent(req: Request, res: Response) {
      try {
         const { name, email, phone, age, neighbor, city, scholarity, gender, lgbt,
            trans, race, suburb, internet, access, receive, permission } = req.body
         const result = await studentBusiness.createStudent(
            name, email, phone, age, neighbor, city, scholarity, gender, lgbt,
            trans, race, suburb, internet, access, receive, permission
         );
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

}

export default new StudentController()