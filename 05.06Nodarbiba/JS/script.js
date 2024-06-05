// if(nosacījums){darbības;}

let now = new Date();
let hour_x = 18;

console.log(now);
console.log(typeof(now));

console.log(now.getHours());
console.log(typeof(now.getHours()));

console.log(now.getHours() < hour_x);
console.log(typeof(now.getHours() < hour_x));
/*
if (now.getHours() < hour_x) {
  console.log("Output from if.");
  document.getElementById("demo").innerHTML = "Good day!";
}
*/
/*if (now.getHours() < hour_x) 
    console.log("Output from nr.1 if.");
    console.log("Output from nr.2 if.");
    document.getElementById("demo").innerHTML = "Good day!";
*/
if (0.1) {
     console.log("Output from nr.1 if.");
     console.log("Output from nr.2 if.");
    document.getElementById("demo").innerHTML = "Good day!";
    }