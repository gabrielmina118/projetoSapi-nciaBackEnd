import express from "express";
import studentController from "../controller/StudentController";

export const studentRouter = express.Router();

studentRouter.post("/create", studentController.createStudent);
