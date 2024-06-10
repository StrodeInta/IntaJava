// https://www.w3schools.com/js/tryit.asp?filename=tryjs_object_for_of

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  //text += x.valueOf() + "<br>";
  text += x + "<br>";
}

document.getElementById("demo1").innerHTML = text;


text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

document.getElementById("demo2").innerHTML = text;

// https://stackoverflow.com/questions/34348937/access-to-es6-array-element-index-inside-for-of-loop
text = "";
for (let [i,x] of cars.entries()) {
  //text += x.valueOf() + "<br>";
  text += i + " " + x + " " + "<br>";
}

document.getElementById("demo3").innerHTML = text;