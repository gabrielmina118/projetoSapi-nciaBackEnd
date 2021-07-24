"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const StudentRouter_1 = require("./router/StudentRouter");
const app = express_1.default();
var cors = require('cors');
app.use(express_1.default.json());
app.use(cors());
app.use("/students", StudentRouter_1.studentRouter);
app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando em http://localhost:3003`);
});
//# sourceMappingURL=index.js.map