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
            new Student_1.Student(dbModel.id, dbModel.name, dbModel.email, dbModel.phone, dbModel.age, dbModel.neighbor, dbModel.city, dbModel.scholarity, dbModel.gender, dbModel.lgbt, dbModel.trans, dbModel.race, dbModel.suburb, dbModel.internet, dbModel.access, dbModel.receive, dbModel.permission));
    }
    createStudent(student) {
        return __awaiter(this, void 0, void 0, function* () {
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
            '${student.getPermission()}',
            )`);
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