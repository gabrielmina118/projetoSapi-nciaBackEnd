import express from "express";
import StudentController from "../controller/StudentController";

export const studentRouter = express.Router();

studentRouter.post("/create", StudentController.createStudent);
