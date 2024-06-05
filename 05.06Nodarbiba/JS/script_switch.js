let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    console.log(day + " selected");
    break;
  case 1:
    day = "Monday";
    console.log(day + " selected");
    break;
  case 2:
    day = "Tuesday";
    console.log(day + " selected");
    break;
  case 3:
    day = "Wednesday";
    console.log(day + " selected");
    break;
  case 4:
    day = "Thursday";
    console.log(day + " selected");
    break;
  case 5:
    day = "Friday";
    console.log(day + " selected");
    break;
  case  6:
    day = "Saturday";
    console.log(day + " selected"); 
}
document.getElementById("demo").innerHTML = "Today is " + day;