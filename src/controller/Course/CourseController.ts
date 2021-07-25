import { Request, Response } from "express";
import { CourseBussines } from "../../business/CourseBussines";
import BaseDataBase from "../../data/BaseDatabase";


class CourseController {

    async allCourse(req: Request, res: Response) {
        try {

            const courseBussines = new CourseBussines()
            const allCourse = await courseBussines.allCourse();

            res.status(200).send(allCourse);
        } catch (error) {
            res.status(error.statusCode || 400).send({ error: error.message });
        } finally {
            await BaseDataBase.destroyConnection();
        }
    }

}

export { CourseController }