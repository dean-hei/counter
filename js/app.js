// DOM references
let numDisplay = document.getElementById("numberDisplay");
let plusButton = document.querySelectorAll("button")[0];
let minusButton = document.querySelectorAll("button")[1];
let inputBox = document.querySelector("input");

// variables
let numDisplayed = 0;

plusButton.addEventListener("click", function(e){
    numDisplayed += parseInt(inputBox.value, 10);
    numDisplay.innerText = numDisplayed;
    if (numDisplayed >= 0){
        numDisplay.style.color = "black";
    }
});
minusButton.addEventListener("click", function(e){
    numDisplayed -= parseInt(inputBox.value, 10);
    numDisplay.innerText = numDisplayed;
    if (numDisplayed < 0){
        numDisplay.style.color = "red";
    }
});