"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseRouter = void 0;
const express_1 = __importDefault(require("express"));
const CourseController_1 = require("../controller/Course/CourseController");
exports.courseRouter = express_1.default.Router();
const courseController = new CourseController_1.CourseController();
exports.courseRouter.get("/all", courseController.allCourse);
//# sourceMappingURL=courseRouter.js.map