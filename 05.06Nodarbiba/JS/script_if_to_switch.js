let now = new Date();
let hour_x = 20;
let morning_hour = 10;
let day_hour = 18;
let night_hour_a = 22;
let night_hour_b = 4;
let time_shift = 5;

now.setHours(now.getHours() + time_shift);

console.log(now.getHours());

console.log(new Date().getMilliseconds());
switch (true) {
  case now.getHours() > night_hour_b && now.getHours() < morning_hour:
    document.getElementById("demo").innerHTML = "Good morning!";
    break;
  case now.getHours() > morning_hour && now.getHours() < day_hour:
    document.getElementById("demo").innerHTML = "Good day!";
    break;
  case now.getHours() > day_hour && now.getHours() < night_hour_a:
    document.getElementById("demo").innerHTML = "Good evening!";
    break;
  case now.getHours() > night_hour_a || now.getHours() < night_hour_b:
    document.getElementById("demo").innerHTML = "Good night!";
    break;
}
console.log(new Date().getMilliseconds());