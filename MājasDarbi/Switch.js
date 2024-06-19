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