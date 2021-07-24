export class Student {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private phone: string,
    private age: number,
    private neighbor: string,
    private city: string,
    private scholarity: string,
    private gender: string,
    private lgbt: string,
    private trans: string,
    private race: string,
	  private suburb: string,
    private internet: string,
    private access: string,
    private receive: number,
    private permission: number
  ) {}

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPhone(): string {
    return this.phone;
  }

  public getAge(): number {
    return this.age;
  }

  public getNeighbor(): string {
    return this.neighbor;
  }

  public getCity(): string {
    return this.city;
  }

  public getScholarity(): string {
    return this.scholarity;
  }

  public getGender(): string {
    return this.gender;
  }

  public getLgbt(): string {
    return this.lgbt;
  }

  public getTrans(): string {
    return this.trans;
  }

  public getRace(): string {
    return this.race;
  }

  public getSuburb(): string {
    return this.suburb;
  }

  public getInternet(): string {
    return this.internet;
  }

  public getAccess(): string {
    return this.access;
  }

  public getReceive(): number {
    return this.receive;
  }

  public getPermission(): number {
    return this.permission;
  }
}

