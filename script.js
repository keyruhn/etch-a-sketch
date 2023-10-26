let color = "black";
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


// Creates grid of divs within the 'grid-container' of the html file. 
function gridPrinter(size) {
    
    let gridContainer = document.querySelector(".grid-container");
    let squares = gridContainer.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    gridContainer.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", colorSquare);
        square.addEventListener("mousedown", colorSquare);
        square.style.backgroundColor = "white";
        gridContainer.insertAdjacentElement("beforeend", square)
    }
}

function colorSquare(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (color === 'rainbow') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else {
        this.style.backgroundColor = color;
    }
}


gridPrinter(16);


// SAFE LINE BELOW
function currentColor() {
    document.querySelector('.current-color').textContent = `Current Color: ${color}`
}

function clearScreen() {
    let gridContainer = document.querySelector(".grid-container");
    let squares = gridContainer.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white");
}

function changeSize(input) {
    if (input >= 4 && input <= 128) {
        gridPrinter(input);
    }  
    else {
        alert("Please enter between 4 and 128 pixels")
    }
}

function paintColor(choice) {
    color = choice;
    document.getElementById("current-color").style.backgroundColor = color;
    return color;
}


