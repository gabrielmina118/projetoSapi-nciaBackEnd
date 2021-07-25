"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.volunteerRouter = void 0;
const express_1 = __importDefault(require("express"));
const VolunteerBusiness_1 = require("../business/VolunteerBusiness");
exports.volunteerRouter = express_1.default.Router();
exports.volunteerRouter.post("/datatoemail", VolunteerBusiness_1.VolunteerBusiness);
//# sourceMappingURL=VolunteerRouter.js.map