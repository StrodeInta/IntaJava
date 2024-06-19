// Create an Object:
const car = {type:"Fiaaaaaaaaaaaaaaat", model:"500", color:"white"};

// Display Data from the Object:
document.getElementById("demo").innerHTML =
"The car type is " + car.type;  

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    },
    whoIsThis: function() {
        return this;
      }
  };

  const myObj = {
    name: "John",
    age: 30,
    myCars: {
      car1: "Ford",
      car2: "BMW",
      car3: "Fiat"
    }
  }
  document.getElementById("demo").innerHTML = myObj.myCars.car2;