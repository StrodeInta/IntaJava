const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  console.log("Output from for: i = "+i);
  text += cars[i] + "<br>";
}

//console.log("Output after for: i = "+i);

console.log(text);

document.getElementById("demo").innerHTML = text;