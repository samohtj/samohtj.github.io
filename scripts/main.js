const button = document.getElementById("cycleButton");
var timesPressed = 0;
button.onclick = function() {
    const stuffDiv = document.getElementById("dynamicText");
    stuffDiv.innerHTML = "I've been pressed " + ++timesPressed + " times!";
}