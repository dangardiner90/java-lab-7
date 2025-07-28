// Part 1: Mouse events

const mouseEvent = document.getElementById('mouseEvent');
// I decided to make the event occur when the mouse is hovered over
mouseEvent.addEventListener('mouseenter', function() {
    mouseEvent.textContent = "I am being hovered over";
});
// The message also changes once it leaves the button area as well
mouseEvent.addEventListener('mouseleave', function() {
    mouseEvent.textContent = "I was hovered over";
});


// Part 2: Keyboard events

const input = document.getElementById('keyinput');
const display = document.getElementById('display');
// On keydown event, will activate the displayKey function
input.addEventListener("keydown", displayKey);
// This will display which key is pressed under the textbox 
function displayKey(event) {
  display.textContent += `${event.code}`;
}


// Part 3: Form events

const formEvent = document.getElementById('formEvent');
const character = document.getElementById('character');
const charDisplay = document.getElementById('charDisplay');
// This will prevent the form from submitting, and display the value chosen in an alert
formEvent.addEventListener('submit', function(event) {
    event.preventDefault();
    alert(`Character chosen: ${character.value}`);
});
// This will display which value was chosen when selected in the drop down menu
character.addEventListener('change', displayChar);

function displayChar(event) {
    event = character.value;
    charDisplay.textContent = `${event}`;
}


// Part 4: Focus and blur events

const comments = document.getElementById('comments');
// When the input box is focused on, it will change to blue and display text
function onFocus() {
    comments.style.background = 'blue';
    comments.value = "This is now focused on";
}
// When the input box loses focus, it will change to red and display text
function onBlur() {
    comments.style.background = 'red';
    comments.value = "This is no longer focused on";
}