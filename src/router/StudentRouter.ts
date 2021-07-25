import express from "express";
import StudentController from "../controller/StudentController";

export const studentRouter = express.Router();

const studentController = new StudentController()

studentRouter.post("/create", studentController.createStudent);
studentRouter.get("/all", studentController.getAllStudent);
studentRouter.get("/profile/:id", studentController.getStudentById);
