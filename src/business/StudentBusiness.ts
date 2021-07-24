import { BaseError } from "../erro/BaseError";
import { Student } from "../model/Student";
import { StudentDatabase } from "../data/StudentDatabase";
import { IdGenerator } from "../services/IdGenerator";

export class StudentBusiness {

   constructor(
      private idGenerator: IdGenerator,
      private studentDatabase: StudentDatabase,
      ){}

   public async createStudent(
      name: string,
      email: string,
      phone: string,
      age: number,
      neighbor: string,
      city: string,
      scholarity: string,
      gender: string,
      lgbt: string,
      trans: string,
      race: string,
      suburb: string,
      internet: string,
      access: string,
      receive: number,
      permission: number
   ) {
      try {
         if (!name || !email || !phone || !age || !neighbor || !city || !scholarity || !age || !gender ||
             !lgbt || !trans || !race || !suburb || !internet || !access || !receive || !permission) {
            throw new BaseError("Missing input", 422);
         }

         if (email.indexOf("@") === -1) {
            throw new BaseError("All addresses must have an @", 422);
         }

         const id = this.idGenerator.generate();

         await this.studentDatabase.createStudent(
            new Student(id, name, email, phone, age, neighbor, city, scholarity, gender, lgbt,
                        trans, race, suburb, internet, access, receive, permission)
         );

         return { message: "Student created" };
      } catch (error) {
         if (error.message.includes("email")) {
            throw new BaseError("Email already in use", 409)
         }
         
         throw new BaseError(error.statusCode, error.message)
      }

   }

}

export default new StudentBusiness(new IdGenerator(), new StudentDatabase())