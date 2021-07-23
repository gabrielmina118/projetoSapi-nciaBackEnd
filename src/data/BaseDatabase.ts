import dotenv from "dotenv";
import knex from "knex";
import Knex from "knex";

dotenv.config();

export default class BaseDataBase {

   protected static STUDENT_TABLE = "sap_student"
   protected static COURSE_TABLE = "sap_course"
   protected static STUDENT_COURSE_TABLE = "sap_student_course"


   protected static connection: Knex = knex({
      client: "mysql",
      connection: {
         host: process.env.DB_HOST,
         port: 3306,
         user: process.env.DB_USER,
         password: process.env.DB_PASSWORD,
         database: process.env.DB_SCHEMA,
      },
   });

   public static async destroyConnection(): Promise<void> {
      await BaseDataBase.connection.destroy();
   }
}
