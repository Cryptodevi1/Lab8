/*
5. Перелік студентів:
• ПІБ студента.
• Дата народження.
• Адреса.
• Телефон
Інформаціє, яка додається динамічно:
• Список додаткових засобів зв’язку зі студентом
*/
export class Catalog {
    name: string = "";
    address: string = "";
    birth_date: Date = new Date("12/12/2012");
    tel : number = 10;
    addtional: string[] = [];
    constructor(name: string, address: string, bd: Date, tel: number, a: string[]) {
       this.name = name;
       this.address = address;
       this.birth_date = bd;
       this.tel=tel;
       this.addtional = a;
    }
 }