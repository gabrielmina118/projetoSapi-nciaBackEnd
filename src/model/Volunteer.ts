export class Volunteer {
    constructor(
        private name: string,
        private obs: string,
        private birthday: string,
        private cpf: string,
        private rg: string,
        private expeditor: string,
        private address: string,
        private email: string,
        private cellphone: string,
        private phone: string,
        private department: string,
        private hours: string,
        private acordo1: string,
        private acordo2: string,
        private acordo3: string,
        private acordo4: string
    ) { }


    public getName(): string {
        return this.name;
    }

    public getObs(): string {
        return this.obs;
    }


    public getBirthday(): string {
        return this.birthday;
    }

    public getCpf(): string {
        return this.cpf;
    }

    public getRg(): string {
        return this.rg;
    }

    public getExpeditor(): string {
        return this.expeditor;
    }
    public getAddress(): string {
        return this.address;
    }

    public getEmail(): string {
        return this.email;
    }

    public getCellphone(): string {
        return this.cellphone;
    }

    public getPhone(): string {
        return this.phone;
    }

    public getDepartment(): string {
        return this.department;
    }

    public getHours(): string {
        return this.hours;
    }

    public getAcordo1(): string {
        return this.acordo1;
    }

    public getAcordo2(): string {
        return this.acordo2;
    }

    public getAcordo3(): string {
        return this.acordo3;
    }

    public getAcordo4(): string {
        return this.acordo4;
    }
}

export interface inputVolunteer {
    name: string,
    obs: string,
    birthday: string,
    cpf: string,
    rg: string,
    expeditor: string,
    address: string,
    email: string,
    cellphone: string,
    phone: string,
    department: string,
    hours: string,
    acordo1: string,
    acordo2: string,
    acordo3: string,
    acordo4: string,
}

