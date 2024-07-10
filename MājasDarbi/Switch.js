function displayDay() {
    var input = document.getElementById("day").value;
    var result = document.getElementById("result");

    switch(parseInt(input)) {
        case 1:
            result.textContent = "Pirmdiena";
            break;
        case 2:
            result.textContent = "Otrdiena";
            break;
        case 3:
            result.textContent = "Trešdiena";
            break;
        case 4:
            result.textContent = "Ceturtdiena";
            break;
        case 5:
            result.textContent = "Piektdiena";
            break;
        case 6:
            result.textContent = "Sestdiena";
            break;
        case 7:
            result.textContent = "Svētdiena";
            break;
        default:
            result.textContent = "Nepareizs ievads. Ievadiet skaitli no 1 līdz 7.";
    }
}

// Izdrukā skaitļus no 1 līdz 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Izdrukā skaitļus no 1 līdz 5
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// Funkcija, kas saskaita divus skaitļus
function saskaitīt(a, b) {
    return a + b;
}

console.log(saskaitīt(3, 4)); // Izdrukā 7


// Anonīma funkcija, kas saskaita divus skaitļus
let saskaitītAnonīmi = function(a, b) {
    return a + b;
};

console.log(saskaitītAnonīmi(3, 4)); // Izdrukā 7

// Anonīma funkcija piešķirta mainīgajam
let saskaitītAnonīmiNosaukts = function(a, b) {
    return a + b;
};

console.log(saskaitītAnonīmiNosaukts(3, 4)); // Izdrukā 7

// Funkcija, kas saskaita divus skaitļus, izmantojot bultas funkciju
let saskaitītArrow = (a, b) => a + b;

console.log(saskaitītArrow(3, 4)); // Izdrukā 7

// Funkcijas izsaukšana ar konkrētiem argumentiem
console.log(saskaitīt(5, 6)); // Izdrukā 11

// Objekts ar datiem
let persona = {
    vārds: "Jānis",
    vecums: 30
};

// Pagaidu papildu references izveidošana
let { vārds, vecums } = persona;

console.log(vārds); // Izdrukā "Jānis"
console.log(vecums); // Izdrukā 30
