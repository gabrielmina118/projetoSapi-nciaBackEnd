"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
class Course {
    constructor(id, name, data) {
        this.id = id;
        this.name = name;
        this.data = data;
    }
    static toCourseModel(course) {
        return new Course(course.id, course.name, course.data);
    }
}
exports.Course = Course;
//# sourceMappingURL=Course.js.map