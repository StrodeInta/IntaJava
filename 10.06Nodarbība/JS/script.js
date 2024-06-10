// https://www.w3schools.com/js/tryit.asp?filename=tryjs_while

let text = "";
let i = 0;
let j = 0;

console.log("i = " + i);
console.log(i < 10);
console.log("text = " + text);

while (i < 10) {
  text += "<br>The number is " + i;
  i++;

  j = 0;
  while (j < 5) {
    if (j == 2) {
      j = j + 0.5;
      continue;
    }

    if (j == 3) {
      break;
    }

    j = j + 0.5;
    console.log("j = " + j);
  }

  //if (i == 4) {continue;}

  //if (i == 7) {break;}

  console.log("i = " + i);
  console.log(i < 10);
  console.log("text = " + text);
}
document.getElementById("demo").innerHTML = text;