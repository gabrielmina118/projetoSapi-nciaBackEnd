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
exports.CourseController = void 0;
const CourseBussines_1 = require("../../bussines/Course/CourseBussines");
const BaseDatabase_1 = __importDefault(require("../../data/BaseDatabase"));
class CourseController {
    allCourse(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const courseBussines = new CourseBussines_1.CourseBussines();
                const allCourse = yield courseBussines.allCourse();
                res.status(200).send(allCourse);
            }
            catch (error) {
                res.status(error.statusCode || 400).send({ error: error.message });
            }
            finally {
                yield BaseDatabase_1.default.destroyConnection();
            }
        });
    }
}
exports.CourseController = CourseController;
//# sourceMappingURL=CourseController.js.map