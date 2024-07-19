//2.1
console.log('---2.1---');

let x = 1;
let y = 2;

let res1 = '' + x + y;
console.log("res1:", res1);
console.log("typeof:", typeof res1);

let res2 = '' + !!x + 2;
console.log("res2:", res2);
console.log("typeof:", typeof res2);

let res3 = x < y;
console.log("res3:", res3);
console.log("typeof:", typeof res3);

let res4 = +('abc' + x + y);
console.log("res4:", res4);
console.log("typeof:", typeof res4);

//2.2
console.log('---2.2---');

let userNumber = prompt("(2.2) Your number:");
alert(`Number -> ${userNumber}`);

let resA =  userNumber >= 0 && (userNumber % 2) === 0;
console.log("Number is even and positive? ", resA);

let resB =  (userNumber % 7) === 0;
console.log("Number is divisible by 7? ", resB);

//2.3
console.log('---2.3---');

let array = [];
array[0] = 24;
array[1] = "text";
array[2] = true;
array[3] = null;
console.log("Array:", array);
console.log("Length:", array.length);

array[4] = prompt("(2.3) Type number for array: ")
console.log("Array:", array);
console.log("5 element:", array[4]);
console.log("Length:", array.length);


array.shift();
console.log("Array:", array);
console.log("Length:", array.length);

//2.4
console.log('---2.4---');

let cities = ["Rome", "Lviv", "Warsaw"];
let resCities = cities.join("*");
console.log(resCities);

//2.5
let userAge = prompt("(2.5) Are you adult? Type your age:");
if (userAge >= 18){
    alert("You are adult!");
} else if (userAge < 10){
    alert("You are too young!");
} else {
    alert("Your age is " + userAge);
}

//2.6
console.log('---2.6---');

let sideA = prompt("(2.6) Triange. Side A:");
let sideB = prompt("(2.6) Triange. Side B:");
let sideC = prompt("(2.6) Triange. Side C:");

let perimeter = Number(sideA) + Number(sideB) + Number(sideC);
console.log("Perimeter of triangle: ", perimeter);

if ((sideA**2 === sideB**2 + sideC**2) || (sideB**2 === sideA**2 + sideC**2) || (sideC**2 === sideA**2 + sideB**2)) {
    console.log("Triangle is rectangular!");
} else {
    console.log("Triangle is not rectangular.");
}

//2.7
console.log('---2.7---');

let date = new Date;
let hour = date.getHours();
console.log("Date:", hour);

//switch operator
switch (hour) {
    case 23:
        console.log("Good night!");
        break;
    case 24:
        console.log("Good night!");
        break;
    case 4:
        console.log("Good night!");
        break;
    case 5:
        console.log("Good morning!");
        break;
    case 9:
        console.log("Good morning!");
        break;
    case 10:
        console.log("Good morning!");
        break;
    case 11:
        console.log("Good day!");
        break;
    case 12:
        console.log("Good day!");
        break;
    case 16:
        console.log("Good day!");
        break;
    case 17:
        console.log("Good evening!");
        break;
    case 18:
        console.log("Good evening!");
        break;
    case 22:
        console.log("Good evening!");
        break;
    default:
        console.log("Hello!");       
}


//if operator
if (hour >= 23 && hour < 5) {
    console.log("Good night!");
} else if (hour >= 5 && hour < 11) {
    console.log("Good morning!");
} else if (hour >= 11 && hour < 17) {
    console.log("Good day!");
} else if (hour >= 17 && hour < 23) {
    console.log("Good evening!");
} 
else {
    console.log("Hello!");       
}