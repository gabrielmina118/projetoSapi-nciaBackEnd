"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentDatabase = void 0;
const BaseDatabase_1 = __importDefault(require("./BaseDatabase"));
const Student_1 = require("../model/Student");
const BaseDatabase_2 = __importDefault(require("./BaseDatabase"));
class StudentDatabase extends BaseDatabase_1.default {
    toModel(dbModel) {
        return (dbModel &&
            new Student_1.Student(dbModel.id, dbModel.name, dbModel.email, dbModel.phone, dbModel.age, dbModel.neighbor, dbModel.city, dbModel.scholarity, dbModel.gender, dbModel.lgbt, dbModel.trans, dbModel.race, dbModel.suburb, dbModel.internet, dbModel.access, dbModel.receive, dbModel.permission, dbModel.courses));
    }
    createStudent(student) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Bando de dados", student.getId());
            try {
                yield BaseDatabase_1.default.connection.raw(`
            INSERT INTO ${BaseDatabase_2.default.STUDENT_TABLE}
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
                for (let i = 0; i < student.getCourses().length; i++) {
                    yield BaseDatabase_1.default.connection.raw(`
               INSERT INTO ${BaseDatabase_2.default.STUDENT_COURSE_TABLE}
               VALUES (
                  '${student.getId()}',
                  '${student.getCourses()[i]}',
               )
            `);
                }
            }
            catch (error) {
                console.log(error);
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getAllStudent() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDatabase_1.default.connection.raw(`
            SELECT sap_course.name as CourseName , sap_student.name as StudentName, sap_student.email, sap_student.phone, sap_student.age FROM sap_student_course INNER JOIN sap_student
            ON sap_student_course.id_student = sap_student.id
            INNER JOIN sap_course 
            ON sap_student_course.id_course = sap_course.id;
         `);
                return result[0];
            }
            catch (error) {
                console.log(error);
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getStudentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDatabase_1.default.connection.raw(`
            SELECT * FROM sap_student
            WHERE id= ${id};
         `);
                return result[0];
            }
            catch (error) {
                console.log(error);
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.StudentDatabase = StudentDatabase;
exports.default = new StudentDatabase();
//# sourceMappingURL=StudentDatabase.js.map