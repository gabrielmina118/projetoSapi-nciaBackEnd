import express from 'express'
import cors from "cors";
import { courseRouter } from './routes/courseRouter';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/course",courseRouter)

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando em http://localhost:3003`);
});