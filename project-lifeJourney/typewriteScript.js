/*
const welcomeText = "Hi \u{1F64B}, welcome to my world...";
const str = welcomeText.split("");
const element = document.getElementsByClassName("typed-out")[0];

function animation() {
    if (str.length > 0) {
        element.innerHTML += str.shift()
    } else {
        clearTimeout(run);
    }

    let run = setInterval(animation, 450); // Use setInterval for continuous animation.
}
animation();
*/


// set up text to print, each item in array is new line
var aText = new Array(
    "Hi \u{1F64B}, welcome to my world...");
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    // var destination = document.getElementById("typedtext");
    var destination = document.querySelector(".typed-out");
    // let destination = document.getElementsByClassName('typed-out');

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "|";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}
typewriter();