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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentBusiness = void 0;
const BaseError_1 = require("../erro/BaseError");
const Student_1 = require("../model/Student");
const StudentDatabase_1 = require("../data/StudentDatabase");
const IdGenerator_1 = require("../services/IdGenerator");
class StudentBusiness {
    constructor(idGenerator, studentDatabase) {
        this.idGenerator = idGenerator;
        this.studentDatabase = studentDatabase;
    }
    createStudent(name, email, phone, age, neighbor, city, scholarity, gender, lgbt, trans, race, suburb, internet, access, receive, permission, courses) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!name || !email || !phone || !age || !neighbor || !city || !scholarity || !age || !gender ||
                    !lgbt || !trans || !race || !suburb || !internet || !access || !receive || !permission) {
                    throw new BaseError_1.BaseError("Missing input", 422);
                }
                if (email.indexOf("@") === -1) {
                    throw new BaseError_1.BaseError("All addresses must have an @", 422);
                }
                const id = this.idGenerator.generate();
                yield this.studentDatabase.createStudent(new Student_1.Student(id, name, email, phone, age, neighbor, city, scholarity, gender, lgbt, trans, race, suburb, internet, access, receive, permission, courses));
                return { message: "Student created" };
            }
            catch (error) {
                if (error.message.includes("email")) {
                    throw new BaseError_1.BaseError("Email already in use", 409);
                }
                throw new BaseError_1.BaseError(error.statusCode, error.message);
            }
        });
    }
    getAllStudent() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.studentDatabase.getAllStudent();
                return { result };
            }
            catch (error) {
                throw new BaseError_1.BaseError(error.statusCode, error.message);
            }
        });
    }
    getStudentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.studentDatabase.getStudentById(id);
                return { result };
            }
            catch (error) {
                throw new BaseError_1.BaseError(error.statusCode, error.message);
            }
        });
    }
}
exports.StudentBusiness = StudentBusiness;
exports.default = new StudentBusiness(new IdGenerator_1.IdGenerator(), new StudentDatabase_1.StudentDatabase());
//# sourceMappingURL=StudentBusiness.js.map