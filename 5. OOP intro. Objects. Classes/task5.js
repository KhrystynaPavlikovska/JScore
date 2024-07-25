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

let kris = new Person ("Kris", "Pavl");
kris.showFullName();

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

let kriss = new Student ("Kris", "Pavl", 2017);
kriss.showFullName("Volodm");
kriss.showCourse();


//5.4
console.log('---5.4---');

class Worker {
    #experience = 1.2;
    constructor (fullname, dayRate, workingDays) {
        this.fullname = fullname;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    showSalary (){
        return this.dayRate * this.workingDays;
    }
}