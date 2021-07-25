import express from "express";
import { VolunteerBusiness } from "../business/VolunteerBusiness";

export const volunteerRouter = express.Router();

volunteerRouter.post("/datatoemail", VolunteerBusiness);
