import BaseDatabase from "../src/data/BaseDatabase"

export class MySqlSetup extends BaseDatabase {
    public async createTable(): Promise<void> {
        try {
            await BaseDatabase.connection.raw(`
            CREATE TABLE IF NOT EXISTS ${BaseDatabase.STUDENT_TABLE} (
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
        `)

            await BaseDatabase.connection.raw(`
            CREATE TABLE IF NOT EXISTS ${BaseDatabase.COURSE_TABLE} (
                id int primary key auto_increment ,
                name varchar(255) not null,
                speaker varchar(255) not null,
                profession varchar(255) not null,
                bio varchar(255) not null,
                date date not null,
                hour varchar(10) not null
            )
        `)

            await BaseDatabase.connection.raw(`
            CREATE TABLE IF NOT EXISTS ${BaseDatabase.STUDENT_COURSE_TABLE} (
                id_student varchar(255) not null ,
                id_course int not null,
                foreign key (id_student) references ${BaseDatabase.STUDENT_TABLE}(id),
                foreign key (id_course) references ${BaseDatabase.COURSE_TABLE}(id)
            )
        `)

            console.log("MySql setup completed!")
            BaseDatabase.destroyConnection()

        } catch (error) {
            console.log(error)
        }
    }
}

new MySqlSetup().createTable()