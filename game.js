var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#ColorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function(){
    switchMode();
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i= 0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor =colors[i];
        } else {
            squares[i].style.display="none";
        }
    }
});

hardBtn.addEventListener("click",function(){
    switchMode();
    numSquares=6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i= 0; i<squares.length; i++){
        squares[i].style.backgroundColor =colors[i];
        squares[i].style.display="block";
    };
});

function switchMode(){
    easyBtn.classList.toggle("selected");
    hardBtn.classList.toggle("selected");
}

resetButton.addEventListener("click", function(){
    //generate new colors
    colors = generateRandomColors(numSquares);
    //pick new colors
    pickedColor = pickColor();
    //change colordisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors
    for(var i = 0; i< squares.length; i ++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue"
})

colorDisplay.textContent=pickedColor;

for(var i= 0; i<squares.length;i++){
    //add initial colors
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click",function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // compare to picked color
        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Correct"
            resetButton.textContent="Play Again?"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323"
            messageDisplay.textContent="Try Again"
        }
    })

}

function changeColors(color){
    for(var i= 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}


function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]
}

function generateRandomColors(num){
    //make an array
    var arr = []
    //add num random colors to array
    for(var i = 0; i < num; i++){
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`

}