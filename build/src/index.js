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

const cors_1 = __importDefault(require("cors"));
const courseRouter_1 = require("./routes/courseRouter");
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.use("/course", courseRouter_1.courseRouter);

//# sourceMappingURL=index.js.map