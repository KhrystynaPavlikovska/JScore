//4.1

console.log('---4.1---');

function testThrow(error) {
    try {
        throw error;
    } catch (exception) {
        console.log("Caught: ", exception);
    }
}

testThrow(5); 
testThrow('Test');
testThrow(new Error('An error happened'));

//4.2 (1)
console.log('---4.2.1---');

function calcRectangleArea() {
    let width = parseFloat(prompt("Width: "));
    let height = parseFloat(prompt("Heigth: "));
    let area = width * height;

    if (isNaN(width) || (isNaN(height))) {
        throw new Error("You entered not a number!");
    }
    return area;   
}

try {
    let resultArea = calcRectangleArea();
    console.log("Area: ", resultArea);

    } catch (exception) {
    console.log(exception.name);
    console.log("Caught: ", exception.message);
    console.log(exception.stack);
    }

//4.2 (2)
console.log('---4.2.2---');

function calcRectangleArea2(width, height) {
    if (typeof width !== "number" || typeof height !== "number") {
        throw new Error("You entered not a number!");
    }
    return width * height;;
}

try {
    console.log("Area: ", calcRectangleArea2(6, 100));  
    console.log("Area: ", calcRectangleArea2(4, 4));  
    console.log("Area: ", calcRectangleArea2('kk', 10)); 

} catch (exception) {
    console.log(exception.name);
    console.log("Caught: ", exception.message);
    console.log(exception.stack);
}


//4.3
console.log('---4.3---');

function checkAge() {
    let age = prompt("Enter your age: ");

    if (age === "") {
        throw new Error("The field is empty!");
    }
    age = parseFloat(age);

    if (isNaN(age)) {
        throw new Error("You entered not a number!");
    }

    if (age < 14) {
        throw new Error("You are too young!");
    }

    return age;   
}

try {
    console.log("Age: ", checkAge());
    console.log("You can watch a movie :)");

    } catch (exception) {
    console.log(exception.name);
    console.log("Caught: ", exception.message);
    console.log(exception.stack);
    }


//4.4
console.log('---4.4---');

class MonthException {
    constructor(message) {
        this.message = message;
        this.name = 'MonthException';
    }
}

function showMonthName(month) {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
        
    if (month < 1 || month > 12) {
        throw new MonthException("Incorrect month number");
    }
    
    return monthNames[month - 1];
}

try {
    console.log(showMonthName(5));  
    console.log(showMonthName(14));
    
} catch (exception) {
    console.log(`${exception.name} - ${exception.message}`);
}
    

//4.5
console.log('---4.5---');

function showUser(id) {
    if (id < 0) {
        throw new Error(`ID is negative: ${id}`);
    }
    console.log("ID", id);
    return {userID: id};
}

showUser(6);
showUser(40);
//showUser(-4);

function showUsers(ids) {
    const users = [];
    
    for (let i = 0; i < ids.length; i++){
        try {
            const user = showUser(ids[i]);
            users.push(user);

        } catch (exception) {
            console.log("Caught: ", exception.message);
        }
    }
    return users;
}

const result = showUsers([7, -12, 44, 22]);
console.log("Array ", result);
