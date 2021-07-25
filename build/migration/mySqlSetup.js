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
exports.MySqlSetup = void 0;
const BaseDatabase_1 = __importDefault(require("../src/data/BaseDatabase"));
class MySqlSetup extends BaseDatabase_1.default {
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDatabase_1.default.connection.raw(`
            CREATE TABLE IF NOT EXISTS ${BaseDatabase_1.default.STUDENT_TABLE} (
                id varchar(255) not null primary key,
                name varchar(255) not null,
                email varchar(255) not null unique,
                phone varchar(11) not null, 
                age int not null,
                neighbor varchar(255) not null,
                city varchar(255) not null,
                scholarity enum("EFI","EFC","EMI","EMC","ESI","ESC") not null ,
                gender enum("homem","mulher","naoBinario","outro") not null,
                lgbt enum("sim","nao","talvez","prefiroNaoResponder") not null,
                trans enum("sim","nao","talvez","prefiroNaoResponder") not null,
                race enum("negro","branco","pardo","amarelo","indigena","outro","prefiroNaoResponder") not null,
                suburb enum("sim","nao","naoSei","prefiroNaoResponder") not null,
                internet enum("sim","nao","naoSei") not null,
                access enum("celular","computador","tablet","outro") not null,
                receive_material boolean not null,
                permission boolean not null
            )
        `);
                yield BaseDatabase_1.default.connection.raw(`
            CREATE TABLE IF NOT EXISTS ${BaseDatabase_1.default.COURSE_TABLE} (
                id int primary key auto_increment ,
                name varchar(255) not null,
                speaker varchar(255) not null,
                profession varchar(255) not null,
                bio varchar(255) not null,
                date date not null,
                hour varchar(10) not null
            )
        `);
                yield BaseDatabase_1.default.connection.raw(`
            CREATE TABLE IF NOT EXISTS ${BaseDatabase_1.default.STUDENT_COURSE_TABLE} (
                id_student varchar(255) not null ,
                id_course int not null,
                foreign key (id_student) references ${BaseDatabase_1.default.STUDENT_TABLE}(id),
                foreign key (id_course) references ${BaseDatabase_1.default.COURSE_TABLE}(id)
            )
        `);
                console.log("MySql setup completed!");
                BaseDatabase_1.default.destroyConnection();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.MySqlSetup = MySqlSetup;
new MySqlSetup().createTable();
//# sourceMappingURL=mySqlSetup.js.map