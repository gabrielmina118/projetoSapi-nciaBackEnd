"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const StudentRouter_1 = require("./router/StudentRouter");
const courseRouter_1 = require("./routes/courseRouter");
const VolunteerRouter_1 = require("./router/VolunteerRouter");
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.use("/students", StudentRouter_1.studentRouter);
app.use("/course", courseRouter_1.courseRouter);
app.use("/volunteers", VolunteerRouter_1.volunteerRouter);
app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando em http://localhost:3003`);
});
//# sourceMappingURL=index.js.map