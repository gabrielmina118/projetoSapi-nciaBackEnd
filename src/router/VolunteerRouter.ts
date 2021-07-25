import express from "express";
import { VolunteerController } from "../controller/VolunteerController";

export const volunteerRouter = express.Router();

const voulunteerController = new VolunteerController();

volunteerRouter.post("/datatoemail", voulunteerController.sendMail);
