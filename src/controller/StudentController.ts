import { Request, Response } from "express";
import StudentBusiness from "../business/StudentBusiness";


 class StudentController {

   public async createStudent(req: Request, res: Response) {
      try {
         const { name, email, phone, age, neighbor, city, scholarity, gender, lgbt,
            trans, race, suburb, internet, access, receive, permission, courses } = req.body

         const result = await StudentBusiness.createStudent(
            name, email, phone, age, neighbor, city, scholarity, gender, lgbt,
            trans, race, suburb, internet, access, receive, permission, courses
         );
         
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async getAllStudent(req: Request, res: Response) {
      try {
         const result = await StudentBusiness.getAllStudent();
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async getStudentById(req: Request, res: Response) {
      try {
         const {id} = req.params
         const result = await StudentBusiness.getStudentById(id);
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

}

export default StudentController