//7.1
function myFunciton(){
    let openTab  = window.open("", "", "width=300,height=300");

    if (openTab){
    setTimeout(function(){
        openTab.resizeTo(500, 500);
    }, 2000);
    
    setTimeout(function(){
        openTab.moveTo(200, 200);
    }, 4000);
    
    setTimeout(function(){
        openTab.close();
    }, 6000);
    } else {
        alert("The popup window was blocked by your browser. Please allow popups and try again.");
    }
}

document.getElementById("myBtn").onclick = myFunciton;

//7.2
function changeCSS() {
    let text = document.getElementById('text');
    text.style.color = 'orange';
    text.style.fontSize = '20px';
    text.style.fontFamily = 'Comic Sans MS';
}

document.getElementById('changeStyleBtn').onclick = changeCSS;

//7.3
document.getElementById('btn1').onclick = function() {
    document.body.style.backgroundColor = 'blue';
};

document.getElementById('btn2').ondblclick = function() {
    document.body.style.backgroundColor = 'pink';
};

document.getElementById('btn3').onmousedown = function() {
    document.body.style.backgroundColor = 'brown';
};

document.getElementById('btn3').onmouseup = function() {
    document.body.style.backgroundColor = 'white';
};

document.getElementById('myLink').onmouseover = function() {
    document.body.style.backgroundColor = 'yellow';
};

document.getElementById('myLink').onmouseout = function() {
    document.body.style.backgroundColor = 'white';
};

//7.4
document.getElementById('removeBtn').onclick = function() {
    var select = document.getElementById('mySelect');
    if (select.selectedIndex !== -1) {
        select.remove(select.selectedIndex);
    }
};

//7.5
let button = document.getElementById("liveButton");
let messages = document.getElementById("messages");

button.onclick = function () {
    let message = document.createElement("p");
    message.textContent = "I was pressed!";
    messages.appendChild(message);
};

button.onmouseover = function () {
    let message = document.createElement("p");
    message.textContent = "Mouse on me!";
    messages.appendChild(message);
};

button.onmouseout = function () {
    let message = document.createElement("p");
    message.textContent = "Mouse is not on me!";
    messages.appendChild(message);
};

//7.6

function updateDimensions() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    document.getElementById('dimensions').textContent = `Width: ${width}px, Height: ${height}px`;
}

updateDimensions();

window.addEventListener('resize', updateDimensions);

//7.7
const cityData = {
    ger: ['Berlin', 'Munich', 'Hamburg'],
    usa: ['New York', 'Los Angeles', 'Chicago'],
    ukr: ['Kyiv', 'Lviv', 'Odesa']
};

document.getElementById('country').addEventListener('change', function() {
    const country = this.value;
    const citySelect = document.getElementById('cities');
    const info = document.getElementById('info');

    citySelect.innerHTML = '<option value="">Select a city</option>';

    if (country) {
        cityData[country].forEach(city => {
            citySelect.innerHTML += `<option value="${city}">${city}</option>`;
        });
    }
    info.textContent = '';
});

document.getElementById('cities').addEventListener('change', function() {
    const country = document.getElementById('country').selectedOptions[0].text;
    const city = this.value;
    document.getElementById('info').textContent = city ? `Selected country: ${country}, Selected city: ${city}` : '';
});
