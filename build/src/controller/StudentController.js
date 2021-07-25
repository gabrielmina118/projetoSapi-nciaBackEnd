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
exports.StudentController = void 0;
const StudentBusiness_1 = require("../business/StudentBusiness");
const IdGenerator_1 = require("../services/IdGenerator");
const StudentDatabase_1 = require("../data/StudentDatabase");
const studentBusiness = new StudentBusiness_1.StudentBusiness(new IdGenerator_1.IdGenerator(), new StudentDatabase_1.StudentDatabase());
class StudentController {
    createStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, phone, age, neighbor, city, scholarity, gender, lgbt, trans, race, suburb, internet, access, receive, permission, courses } = req.body;
                const result = yield studentBusiness.createStudent(name, email, phone, age, neighbor, city, scholarity, gender, lgbt, trans, race, suburb, internet, access, receive, permission, courses);
                res.status(200).send(result);
            }
            catch (error) {
                const { statusCode, message } = error;
                res.status(statusCode || 400).send({ message });
            }
        });
    }
    getAllStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield studentBusiness.getAllStudent();
                res.status(200).send(result);
            }
            catch (error) {
                const { statusCode, message } = error;
                res.status(statusCode || 400).send({ message });
            }
        });
    }
    getStudentById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield studentBusiness.getStudentById(id);
                res.status(200).send(result);
            }
            catch (error) {
                const { statusCode, message } = error;
                res.status(statusCode || 400).send({ message });
            }
        });
    }
}
exports.StudentController = StudentController;
exports.default = new StudentController();
//# sourceMappingURL=StudentController.js.map