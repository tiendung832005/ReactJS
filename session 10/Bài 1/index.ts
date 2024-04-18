class Vehice{
    name: string
    year: number
    company: string
    constructor(name: string, year: number, company: string) {
        this.name=name;
        this.year=year;
        this.company=company;
    }
}
let vision = new Vehice("vision", 2023, "honda");
let mercedes = new Vehice("C300", 2022, "Mercedes");

console.log(`Tên xe: ${vision.name}, Năm:  ${vision.year}, Công ty:  ${vision.company}`);
console.log(`Tên xe: ${mercedes.name}, Năm:  ${mercedes.year}, Công ty:  ${mercedes.company}`);
