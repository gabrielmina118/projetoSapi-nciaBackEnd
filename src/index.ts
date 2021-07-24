import express from 'express'
import { studentRouter } from "./router/StudentRouter";

const app = express();
var cors = require('cors')

app.use(express.json());
app.use(cors());

app.use("/students", studentRouter);

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando em http://localhost:3003`);
});