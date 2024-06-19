window.name = "N09";
/*
var counter = 1;
var showCounter = () => console.log(counter);

console.log(counter);
console.log(window.counter);

showCounter();
window.showCounter();
*/

/*
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerWidth);
console.log(window.outerHeight);
console.log(document.documentElement.clientWidth);
*/

/*
// https://developer.mozilla.org/en-US/docs/Web/API/Window/resizeBy
// https://developer.mozilla.org/en-US/docs/Web/API/Window/resizeTo
console.log(window.innerWidth);
window.resizeTo(500,100);
console.log(window.innerWidth);
*/

//window.open("https://rtu.lv", "RTU");
//window.open("https://lu.lv", "LU");
//window.open("http://127.0.0.1:5500/Nodarbiba_08/", "N08");
// drošības pēc lokālu failu aplūkošana ir bloķēta
//window.open("file:///C:/Users/some.html", "local");
//window.focus();

/*
let jsWindow = window.open(
    //"https://rtu.lv",
    "http://127.0.0.1:5500/Nodarbiba_08/index.html",
    //"RTU",
    "N08",
    'height=600,width=800');

setTimeout(() => {
    jsWindow.resizeTo(600, 300);
}, 3000);

setTimeout(() => {
    jsWindow.moveBy(20,-50);
}, 4000);


setTimeout(() => {
    jsWindow.close();
}, 10000);
*/

/*
setTimeout(() => {
    alert('2 seconds has been passed!')
}, 2000);

setTimeout(() => {
    alert('1 second has been passed!')
}, 1000);
*/

/*
let result_c = confirm('Vai dzēst izvēlēto saturu?');
let message_c = result_c ? 'Jūs teicāt - jā' : 'Jūs teicāt - nē';
alert(message_c);

let result_p = prompt('Ievadiet šī gada numuru:','2024');
let message_p = result_p ? 'Šobrīd ir '+result_p+'. gads' : '???. gads';
alert(message_p);

console.log(result_p * result_p);

let lang = prompt('What is your favorite programming language?');

let feedback = lang.toLowerCase() === 'javascript' ? `It's great!` :  `It's ${lang}`;

alert(feedback);
*/

var timeoutID;

function showAlert() {
    timeoutID = setTimeout(alert, 3000, 'setTimeout Demo!');
    console.log(timeoutID);
}

function cancelAlert() {
    clearTimeout(timeoutID);
}



let intervalID;
let startBtn = document.getElementById('start');
 
function toggleColor() {
  let e = document.getElementById('flashtext');
  e.style.color = e.style.color == 'red' ? 'blue' : 'red';
}

function stop() {
    console.log(intervalID); 
  clearInterval(intervalID);
  startBtn.disabled = false;
}

function start() {
   intervalID = setInterval(toggleColor, 1000); 
   console.log(intervalID);
   startBtn.disabled = true;
}