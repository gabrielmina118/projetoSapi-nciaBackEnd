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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VolunteerBusiness = void 0;
const mailer_1 = require("../services/mailer");
function VolunteerBusiness(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let errorCode = 400;
        try {
            const email = "rafaelgf@gmail.com";
            const name = req.body;
            yield mailer_1.writeEmail({
                from: "Admin <admin@email.com.br>",
                to: email,
                subject: "Novo Voluntário(a)",
                text: "Dados do formulário",
                html: `<p>Olá, eu sou ${name}.</p>`
            });
            res.status(200).send({ message: "Dados do formulário enviados com sucesso" });
        }
        catch (error) {
            res.status(errorCode).send({ message: error.message });
        }
    });
}
exports.VolunteerBusiness = VolunteerBusiness;
//# sourceMappingURL=VolunteerBusiness.js.map