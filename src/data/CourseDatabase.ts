import { Course } from "../model/Course";
import BaseDataBase from "./BaseDatabase";

class CourseDatabase extends BaseDataBase {


    public async getAllCourse(): Promise<any[]> {
        try {
            const result = await BaseDataBase.connection.select("name", "date").from(BaseDataBase.COURSE_TABLE);
            return result;
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

}
export { CourseDatabase }
