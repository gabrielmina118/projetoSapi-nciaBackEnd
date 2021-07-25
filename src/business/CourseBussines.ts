import { CourseDatabase } from "../data/CourseDatabase";

class CourseBussines {

    async allCourse(){


        const courseDatabase = new CourseDatabase();
        const allCourse = await courseDatabase.getAllCourse();

    
        return allCourse;
    }
}

export { CourseBussines }