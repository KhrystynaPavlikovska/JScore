// 1.2
console.log("---1.2---");
console.log('Pavlikovska');

// 1.3
console.log("---1.3---");
//a
let a;
let b;

//b
a = "one";
b = "two";

//c
console.log(`a: ${a} \nb: ${b}`);

//d
a = b;

//e
console.log(`a: ${a} \nb: ${b}`);

//1.4
let primitiveTypes = {
    string: "text",
    number: 88,
    boolean: true,
    undefined,
    null: null
}

/*
console.log(typeof primitiveTypes.string);
console.log(typeof primitiveTypes.number);
console.log(typeof primitiveTypes.boolean);
console.log(typeof primitiveTypes.undefined);
console.log(typeof primitiveTypes.null);
*/

//1.5
console.log("---1.5---");
let isAdult = confirm("Are you adult?");
console.log(`Is adult: ${isAdult}`);

//1.7
let userLogin = prompt("Your login:");
let userEmail = prompt("Your email:");
let userPassword = prompt("Your password:");
alert(`Dear - ${userLogin}, \nyour email -> ${userEmail} \nyour password -> ${userPassword}`);

//1.8
console.log("---1.8---");
let secInMinute = 60;
let minutesInHour = 60;
let hourInDay = 24;
let daysInMonthEven = 30;
let daysInMonthOdd = 31;

let secInHour = secInMinute * minutesInHour;
let secInDay = secInHour * hourInDay;
let secInMonthEven = secInDay * daysInMonthEven;
let secInMonthOdd = secInDay * daysInMonthOdd;

console.log(`\tSeconds in hour = ${secInHour}
    Seconds in day = ${secInDay}
    Seconds in even month = ${secInMonthEven}
    Seconds in odd month = ${secInMonthOdd}`);
    
