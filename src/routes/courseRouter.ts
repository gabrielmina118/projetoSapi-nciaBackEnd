import express from 'express'
import { CourseController } from '../controller/Course/CourseController';

export const courseRouter = express.Router();

const courseController = new CourseController()

courseRouter.get("/all", courseController.allCourse)