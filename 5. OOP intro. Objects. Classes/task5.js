//5.1
console.log('---5.1---');

function propsCount(currentObject) {
    return Object.values(currentObject).length;
    
    //2 way to get amount of properties
    //return Object.keys(currentObject).length;  
    
}

let mentor = {
    couse: "JS",
    duration: 3
};
console.log(propsCount(mentor));  //2

mentor.direction = "web";
console.log(propsCount(mentor));  //3

mentor.name = "Volodymyr";
mentor.position = "Senior QC Engineer";
console.log(propsCount(mentor));  //5


//5.2
console.log('---5.2---');

let me = {
    name: "Kris",
    surname: "Pavl",
    age: 23,
    height: 173,
    isSingle: true
}

function showProps(obj){
    let properties = Object.keys(obj);
    console.log("Properties: ", properties)
    
    let values = Object.values(obj);
    console.log("Values: ", values)
    
    //show pair [key: value]
    //Object.entries(obj);
}

showProps(me);


//5.3
console.log('---5.3---');

class Person {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    showFullName(){
        return console.log(this.name + " " + this.surname);
    }
}

let person1 = new Person ("Kris", "Pavl");
person1.showFullName();

class Student extends Person {
    constructor (name, surname, year){
        super (name, surname);
        this.year = year;  
    }

    showFullName(middleName){
    return console.log(this.name + " " + this.surname + " " + middleName);
    }

    showCourse(){
        const currentYear = new Date().getFullYear();
        let course = currentYear - this.year + 1;
        return console.log (`Student is on ${course} course.`);
    }
}

let student1 = new Student ("Kris", "Pavl", 2017);
student1.showFullName("Volodm");
student1.showCourse();


//5.4
console.log('---5.4---');

class Worker {
    #experience = 1.2;
    
    get showExperience (){
        return this.#experience;
    }
    
    set setExperience(value){
        this.#experience = value;
    }
    
    constructor (fullname, dayRate, workingDays){
        this.fullname = fullname;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    
    showSalary(){
        const salary = this.dayRate * this.workingDays;
        return console.log(`${this.fullname}'s salary: ${salary}`);
    }
    
    showSalaryWithExperience(){
        const salaryWithExperience = this.dayRate * this.workingDays * this.#experience;
        //console.log(`${this.fullname}'s salary with experience: ${salaryWithExperience}`);
        return salaryWithExperience;
    }
}

let employee1 = new Worker("Khrystyna Pavl", 200, 17);
console.log("Employee 1: ", employee1.fullname);
employee1.showSalary();
console.log("Experience: " + employee1.showExperience);
console.log(`${employee1.fullname}'s salary with experience: ${employee1.showSalaryWithExperience()}`);
employee1.setExperience = 1.5;
console.log("New experience: " + employee1.showExperience);
console.log(`${employee1.fullname}'s salary with experience: ${employee1.showSalaryWithExperience()}`);

let employee2 = new Worker("John Doe", 400, 23);
console.log("Employee 2: ", employee2.fullname);
employee2.showSalary();
console.log("Experience: " + employee2.showExperience);
console.log(`${employee2.fullname}'s salary with experience: ${employee2.showSalaryWithExperience()}`);
employee2.setExperience = 1.5;
console.log("New experience: " + employee2.showExperience);
console.log(`${employee2.fullname}'s salary with experience: ${employee2.showSalaryWithExperience()}`);

let employee3 = new Worker("Piter Perry", 480, 15);
console.log("Employee 3: ", employee3.fullname);
employee3.showSalary();
console.log("Experience: " + employee3.showExperience);
console.log(`${employee3.fullname}'s salary with experience: ${employee3.showSalaryWithExperience()}`);
employee3.setExperience = 1.5;
console.log("New experience: " + employee3.showExperience);
console.log(`${employee3.fullname}'s salary with experience: ${employee3.showSalaryWithExperience()}`);

let employee4 = new Worker("Jane Doe", 600, 11);
console.log("Employee 4: ", employee4.fullname);
employee4.showSalary();
console.log("Experience: " + employee4.showExperience);
console.log(`${employee1.fullname}'s salary with experience: ${employee1.showSalaryWithExperience()}`);
employee4.setExperience = 1.5;
console.log("New experience: " + employee4.showExperience);
console.log(`${employee1.fullname}'s salary with experience: ${employee1.showSalaryWithExperience()}`);


let employees = [employee1, employee2, employee3, employee4];
employees.sort(function(a, b){
    return a.showSalaryWithExperience() - b.showSalaryWithExperience();
});

console.log("Sorted salary:");
employees.forEach(function(employee){
    console.log(`${employee.fullname}: ${employee.showSalaryWithExperience()}`);
});


//5.5
console.log('---5.5---');

class GeometricFigure {
    getArea(){
        return 0;
    }

    toString(){
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(side, height){
        super();
        this.side = side;
        this.height = height;
    }

    getArea(){
        return 0.5 * this.side * this.height;
    }
}

class Square extends GeometricFigure {
    constructor(side){
        super();
        this.side = side;
    }

    getArea(){
        return Math.pow(this.side, 2);
    }
}

class Circle extends GeometricFigure {
    constructor(radius){
        super();
        this.radius = radius;
    }

    getArea(){
        return Math.PI * Math.pow(this.radius, 2);
    }
}

function handleFigures(figures) {
    let totalArea =  figures.reduce(function(accumulator, figure){
        if (figure instanceof GeometricFigure){
            let area = figure.getArea();
            console.log(`Geometric figure: ${figure.toString()} - area: ${area}`);
            accumulator += area;
        } 
        return accumulator;
    }, 0);

    return totalArea;
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));