'use strict';

// function to get random value from an array
const getRandomValue = (list, uiElement) => {
    // get random value from array
    const value = list[Math.floor(Math.random() * list.length)];
    // display random value on page
    uiElement.innerHTML = value;
}

// function to change css propery
const setBackgroundColor = (element, color) => {
    element.style.backgroundColor = color;
}

// array of possible values for spinner
const spinnerValues = ['1', '2', '3', '4', '5', '6', 'SWIPE'];

// DOM element to display results in
const displayElement = document.getElementById('result');

// button to click to get spinner value
const spinnerButton = document.getElementById('selector');

// add 'click' event listener to button
spinnerButton.addEventListener('click', function() {
    // hide result
    setBackgroundColor(displayElement, '#000');
    // update value
    setTimeout(function() {getRandomValue(spinnerValues, displayElement)}, 400);
    // show result
    setTimeout(function() {setBackgroundColor(displayElement, '#fff')}, 700);
});