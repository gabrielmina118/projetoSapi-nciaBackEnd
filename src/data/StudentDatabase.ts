import BaseDataBase from "./BaseDatabase";
import { Student } from "../model/Student";
import BaseDatabase from "./BaseDatabase";
import { CourseBussines } from "../business/CourseBussines";

export class StudentDatabase extends BaseDataBase {

   private toModel(dbModel?: any): Student | undefined {
      return (
         dbModel &&
         new Student(
            dbModel.id, dbModel.name, dbModel.email, dbModel.phone, dbModel.age, dbModel.neighbor, dbModel.city, dbModel.scholarity, dbModel.gender, dbModel.lgbt, dbModel.trans, dbModel.race, dbModel.suburb, dbModel.internet, dbModel.access, dbModel.receive, dbModel.permission, dbModel.courses
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
            '${student.getPermission()}'
            )
         `);
         for(let i=0;i<student.getCourses().length;i++) {
            await BaseDataBase.connection.raw(`
               INSERT INTO ${BaseDatabase.STUDENT_COURSE_TABLE}
               VALUES (
                  '${student.getId()}',
                  '${student.getCourses()[i]}',
               )
            `);
         }
      } catch (error) {
         console.log(error)
         throw new Error(error.sqlMessage || error.message)
      }
   }

   public async getAllStudent() {
      try {
         const result = await BaseDataBase.connection.raw(`
            SELECT sap_course.name as CourseName , sap_student.name as StudentName, sap_student.email, sap_student.phone, sap_student.age FROM sap_student_course INNER JOIN sap_student
            ON sap_student_course.id_student = sap_student.id
            INNER JOIN sap_course 
            ON sap_student_course.id_course = sap_course.id;
         `);

         return result[0]
      } catch (error) {
         console.log(error)
         throw new Error(error.sqlMessage || error.message)
      }
   }

   public async getStudentById(id: string): Promise<any | undefined> {
      try {
         const result = await BaseDataBase.connection.raw(`
            SELECT * FROM sap_student
            WHERE id= ${id};
         `);

         return result[0]
      } catch (error) {
         console.log(error)
         throw new Error(error.sqlMessage || error.message)
      }
   }

}

export default new StudentDatabase()