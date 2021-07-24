import express from "express";
import StudentController from "../controller/StudentController";

export const studentRouter = express.Router();

studentRouter.post("/create", StudentController.createStudent);
studentRouter.get("/all", StudentController.getAllStudent);
studentRouter.get("/profile/:id", StudentController.getStudentById);
