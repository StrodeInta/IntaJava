a = 10
console.log("a mainiga vertiba"+a);

/*------------var ar x ------*/
var x = 10;
console.log("x mainiga vertiba pirms {}:"+x);
{
    x = 20;
    console.log("x mainiga vertiba ieks {} un pec = darbibas: "+x);
    var x = 100;
    console.log("x mainiga vertiba ieks {} un pec atkartotas var: " +x)
}
console.log("x mainiga vertiba {} pec + darbibas: "+x);
x = 30;
console.log("x mainiga vertiba pec {} un pec = darbibas: " +x);
var x = 40;
console.log("x mainiga vertiba pec {} un pec atkartotas var: " +x);

/*--------let y-------- */
let y = 10;
console.log("y mainiga vertiba pirms {}:"+y);
{
    //y = 20;
    //console.log("y mainiga vertiba ieks {} un pec = darbibas: "+y);
    let y = 100;
    console.log("y mainiga vertiba ieks {} un pec atkartotas let: " +y)
}
console.log("y mainiga vertiba {} pec + darbibas: "+y);
y = 30;
console.log("y mainiga vertiba pec {} un pec = darbibas: " +y);
//let x = 40;
//var y = 40;
//const y = 40;
//console.log("y mainiga vertiba pec {} un pec atkartotas let: " +y);

/*-------tests ar const------ */
const z = 10;
console.log("z mainiga vertiba pirms {}:"+z);
{
    //console.log("z mainiga vertiba ieks {} un pec = darbibas: "+z);
    //const z = 100;
    //console.log("z mainiga vertiba ieks {} un pec atkartotas const: " +z)
    const z = 100;
    console.log("z mainiga vertiba ieks {} un pēc atkartotas const:" +z);
}
console.log("z mainiga vertiba {} pec + darbibas: "+z);
//z = 30;
//console.log("z mainiga vertiba pec {} un pec = darbibas: " +z);
//const z = 40;
//var z = 40;
//let z = 40;
//console.log("z mainiga vertiba pec {} un pec atkartotas const: " +xz);