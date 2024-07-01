//https://www.javascripttutorial.net/javascript-dom/

const element = document.getElementById("demo");

setTimeout(() => {
    element.innerHTML = "Boooooo!";
}, 3000);

setTimeout(() => {
    element.innerHTML = "Boooooo!  Boooooo! Boooooo!";
}, 5000);