import BaseDataBase from "./BaseDatabase";
import { Student } from "../model/Student";
import BaseDatabase from "./BaseDatabase";

export class StudentDatabase extends BaseDataBase {

   private toModel(dbModel?: any): Student | undefined {
      return (
         dbModel &&
         new Student(
            dbModel.id, dbModel.name, dbModel.email, dbModel.phone, dbModel.age, dbModel.neighbor, dbModel.city, dbModel.scholarity, dbModel.gender, dbModel.lgbt, dbModel.trans, dbModel.race, dbModel.suburb, dbModel.internet, dbModel.access, dbModel.receive, dbModel.permission
         )
      );
   }

   public async createStudent(student: Student): Promise<void> {
      try {
         await BaseDataBase.connection.raw(`
            INSERT INTO ${BaseDatabase.STUDENT_TABLE}
            VALUES (
            '${student.getId()}', 
            '${student.getName()}', 
            '${student.getEmail()}',
            '${student.getPhone()}',
            '${student.getAge()}',
            '${student.getNeighbor()}',
            '${student.getCity()}',
            '${student.getScholarity()}',
            '${student.getGender()}',
            '${student.getLgbt()}',
            '${student.getTrans()}',
            '${student.getRace()}',
            '${student.getSuburb()}',
            '${student.getInternet()}',
            '${student.getAccess()}',
            '${student.getReceive()}',
            '${student.getPermission()}',
            )`
         );
      } catch (error) {
         console.log(error)
         throw new Error(error.sqlMessage || error.message)
      }
   }

}

export default new StudentDatabase()