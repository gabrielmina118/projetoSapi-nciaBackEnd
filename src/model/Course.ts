export class Course {

    constructor(
        private id:string,
        private name:string,
        private data:Date
    ){ }


    static toCourseModel(course: any): Course {
        return new Course(course.id, course.name, course.data);
    }
}

export interface inputCourse {
    name: string
    data: Date
}