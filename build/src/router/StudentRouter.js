"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRouter = void 0;
const express_1 = __importDefault(require("express"));
const StudentController_1 = __importDefault(require("../controller/StudentController"));
exports.studentRouter = express_1.default.Router();
exports.studentRouter.post("/create", StudentController_1.default.createStudent);
exports.studentRouter.get("/all", StudentController_1.default.getAllStudent);
exports.studentRouter.get("/profile/:id", StudentController_1.default.getStudentById);
//# sourceMappingURL=StudentRouter.js.map