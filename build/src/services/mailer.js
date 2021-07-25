"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeEmail = exports.config = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
exports.config = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "bf68b5de21463a",
        pass: "37a302f502122a"
    }
};
let transporter = nodemailer_1.default.createTransport(exports.config);
function writeEmail(mail) {
    return __awaiter(this, void 0, void 0, function* () {
        let mailContent = {
            from: mail.from,
            to: mail.to,
            subject: mail.subject,
            text: mail.text,
            html: mail.html
        };
        transporter.sendMail(mailContent, (error, info) => {
            if (error) {
                throw new Error(error.message);
            }
            else {
                console.log(`E-mail enviado para ${mailContent.to}!`);
            }
        });
    });
}
exports.writeEmail = writeEmail;
//# sourceMappingURL=mailer.js.map