//3.1
console.log('---3.1---');

let array = [2, 3, 4, 5];
let multiplication = 1;

for (let i = 0; i < array.length; i++) {
    multiplication *= array[i];
}
console.log("Multiplication of all elements of array: ", multiplication);

//while
product = 1;
let i = 0;
while (i < array.length){
    product *= array[i];
    i++;
}
console.log("Multiplication of all elements of array: ", product);

//3.2
console.log('---3.2---');

for (let i = 0; i <=15; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`)
    } else {
        console.log(`${i} is odd`)
    }
}

//3.3
console.log('---3.3---');

function randArray(k){
    
    let array = [];
    for (let i = 0; i < k; i++){
        array.push(Math.floor(Math.random() * 500) + 1);
    }
    console.log("Array: ", array)
}

randArray(4);
randArray(1);
randArray(6);
randArray(2);


//3.4
console.log('---3.4---');

let a = prompt("(3.4) Number A: ");
let b = prompt("(3.4) Degree B: ");

function raiseToDegree(a, b){
    let c = a ** b; 
    console.log(`Number A: ${a}, to degree ${b} -> ${c}`);
    return c;
}
raiseToDegree(a,b);

raiseToDegree(2,2);
raiseToDegree(3,4);

//3.5
console.log('---3.5---');

function findMin() {
    let min = arguments[0]; 
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    console.log("Min element: ", min);
    return min;
}
findMin(121, 34, 8, -2, 0.8);
findMin(10, 32, 48, 1, 24);

//3.6
console.log('---3.6---');

function findUnique(checkArray, n) {
    for ( let i = 0; i < n; i++) {
        for (let j = i + 1 ; j < n; j++) {
            if (checkArray[i] === checkArray[j]){
                console.log(`Array [${checkArray}] is not unique! Duplicate element:`, checkArray[i]);
                return;
        }
    }
}
    console.log(`Array [${checkArray}] is unique!"`);

}

let checkArray = [2, 3, 4, 5, 6];
let n = checkArray.length;
findUnique(checkArray, n);

checkArray = [2, 3, 4, 5, 5, 7];
findUnique(checkArray, n);

checkArray = [3, 3, 7, 8, 8];
findUnique(checkArray, n);

//3.7
console.log('---3.7---');

function lastElem(array, x = 1) {
    if (x <= 0) {
        console.log(`Array [${array}], show ${x} last elements`);
        return [];
    }

    if (x >= array.length) {
        console.log(`Array [${array}], show ${x} last elements (all)`);
        return array.slice(); 
    }
    
    console.log(`Array [${array}], show ${x} last elements`);
    return array.slice(-x); 
}

console.log(lastElem([3, 4, 10, -5]));    
console.log(lastElem([3, 4, 10, -5], 2));  
console.log(lastElem([3, 4, 10, -5], 8)); 
console.log(lastElem([1, 34, 55, 6, 76, 2345, 333, 77654, 0], 4));  
console.log(lastElem([8, 8, 8, 8, 8, 8], 0)); 

//3.8
console.log('---3.8---');

function changeFirstLetter(myText) {
    let words = myText.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }

    let changedText = words.join(' ');
    console.log(changedText); 
    return changedText;
}

let myText = 'i love java script';
changeFirstLetter(myText);

myText = "lLorem ipsum dolor SIT amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam "
changeFirstLetter(myText);
