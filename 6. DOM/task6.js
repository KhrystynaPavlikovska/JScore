//6.1
console.log("~ 6.1:");

//let divElem = document.getElementById("test");   //1 way
let divElem = document.querySelector("#test"); //2 way

console.log(divElem.innerHTML);
divElem.innerHTML = "Second";
console.log(divElem.innerHTML);

//6.2
console.log("~ 6.2:");

let imgElem = document.querySelector("img");
imgElem.src = "cat.jpg";
console.log("imgElem:", imgElem)

//6.3
console.log("~ 6.3:");

let divWithParagraphs = document.querySelector("#text");
let pElems = divWithParagraphs.querySelectorAll("p");

pElems.forEach(function (p, index) {
    console.log(`paragrath: ${index}: ${p.textContent}`);
});

//6.4
console.log("~ 6.4:");

//1 way
let liElems = document.querySelectorAll("#list li");

let orderedList = []; //1 5 2 4 3
orderedList.push(liElems[0].textContent);
orderedList.push(liElems[liElems.length - 1].textContent);
orderedList.push(liElems[1].textContent);
orderedList.push(liElems[3].textContent);
orderedList.push(liElems[2].textContent);
console.log("Ordered list: ", orderedList);

//2 way
/*
function getOrderedListLi(index) {
    let liElems2 = document.querySelectorAll('#list li');
    let orderedList2 = index.map(function(number) {
        return liElems2[number].textContent;
        });
    return orderedList2;
    }
        
let index = [0, 4, 1, 3, 2];
let orderedList2 = getOrderedListLi(index);
console.log("Ordered list2: ", orderedList2); */
        
document.getElementById("modalContent").textContent = orderedList.join(", ");
        
//6.5

document.querySelector("h1").style.backgroundColor = "green";
document.querySelector("#myDiv p").style.fontWeight = "bold";

let paragraphs = document.querySelectorAll("#myDiv p");

paragraphs[1].style.color = "red";
paragraphs[2].style.textDecoration = "underline";
paragraphs[3].style.fontStyle = "italic";

let listItems = document.querySelectorAll("#myList li");
listItems.forEach(function (item) {
    item.style.display = "inline";
});

document.querySelector("#styles span").style.visibility = "hidden";
//document.querySelector('#styles span').style.display = 'none';
//document.querySelector('#styles span').style.opacity = '0';

//6.6
console.log("~ 6.6:");

let input1 = document.getElementById('input1');
let text1 = prompt("Text 1:");
input1.value = text1;
console.log("Updated value of input1: ", input1.value);

let input2 = document.getElementById('input2');
let text2 = prompt("Text 2:");
input2.value = text2;
console.log("Updated value of input2: ", input2.value);

let valueToChange = input1.value;
input1.value = input2.value;
input2.value = valueToChange;
console.log("Value of input1 after change: ", input1.value);
console.log("Value of input2 after change: ", input2.value);

//6.7
console.log("~ 6.7:");

let newMain = document.createElement('main');
newMain.className = "mainClass check item";

let newDiv = document.createElement('div');
newDiv.id = "myDiv";

let newP = document.createElement('p');
newP.innerHTML = "First paragraph";

newDiv.appendChild(newP);
newMain.appendChild(newDiv);
document.body.appendChild(newMain);
console.log("main tag: ", document.querySelector('main'));