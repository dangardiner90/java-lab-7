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

const input = document.querySelector('input');
const display = document.getElementById('display');
// On keydown event, will activate the displayKey function
input.addEventListener("keydown", displayKey);
// This will display which key is pressed under the textbox 
function displayKey(event) {
  display.textContent += `${event.code}`;
}
