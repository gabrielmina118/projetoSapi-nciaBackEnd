import express from 'express'
import cors from "cors";
import { studentRouter } from "./router/StudentRouter";
import { courseRouter } from './router/courseRouter';
import { volunteerRouter } from './router/VolunteerRouter';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/students", studentRouter);
app.use("/course",courseRouter)
app.use("/volunteers", volunteerRouter)

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando em http://localhost:3003`);
});

