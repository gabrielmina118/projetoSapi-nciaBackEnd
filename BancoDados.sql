use `cruz-2114519-gabriel-silva`;

create table sap_student(
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
);

create table sap_course(
	id int primary key auto_increment ,
    name varchar(255) not null,
    date date not null
);

create table sap_student_course(
	id_student varchar(255) not null ,
    id_course int not null,
    foreign key (id_student) references sap_student(id),
    foreign key (id_course) references sap_course(id)
);


select sap_course.name as CourseName , sap_student.name as StudentName from sap_student_course inner join sap_student
on sap_student_course.id_student = sap_student.id
inner join sap_course 
on sap_student_course.id_course = sap_course.id;


insert into sap_student_course
values(
	1,
    2
);

insert into sap_course (name, date)
values(
    "COMO INGRESSAR NO MERCADO FINANCEIRO",
    "2021-05-22"
);


insert into sap_student
values(
	"1",
    "rafis",
    "rafis@gmail.com",
    "99123456789",
    28,
    "bairro A",
    "cidade B",
    "EFI",
    "homem",
    "sim",
    "nao",
    "indigena",
	"prefiroNaoResponder",
    "naoSei",
    "computador",
    false,
    true
);
