var gridHeight = document.getElementById("inputHeight");
var gridWidth = document.getElementById("inputWidth");
var gridForm = document.getElementById("sizePicker");
var pickColor = document.getElementById("colorPicker");
var grid = document.getElementById("pixelCanvas");
let row;
let column;

gridForm.addEventListener("submit", makeGrid);

// Select color input
pickColor.addEventListener("change", addColor);

function addColor(e){
        e.style.backgroundColor = pickColor.value;
        e.setAttribute("onclick", "removeColor(this)")
        e.removeAttribute(addColor);
}

function removeColor(e){
    e.style.backgroundColor = "";
    e.setAttribute("onclick", "addColor(this)");
    e.removeAttribute(removeColor);
}

// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(e) {
    e.preventDefault();

// Your code goes here!
    if(grid.innerHTML !== ""){
        grid.innerHTML = "";
    }

    for(let i = 0; i<gridHeight.value; i++){

        row = document.createElement("tr");
        grid.appendChild(row);

        for(let j = 0; j<gridWidth.value; j++){

            column = document.createElement("td");
            row.appendChild(column);
            column.setAttribute("onclick", "addColor(this)");
        }
    }
}
