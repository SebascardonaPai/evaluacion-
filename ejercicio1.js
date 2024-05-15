let sumanotas = 0;

for (let i = 1; i <= 5; i++) {
    let notas = parseInt(prompt("ingrese la nota "+ i + ": "));
    sumanotas += notas;
} 

let promedio =sumanotas/5;
console.log ("el promedio de la nota es: ", promedio); 

if (promedio >=3) {
    console.log ("el estudiante aprobo");
} else {
    console.log ("el estudiante reprobo");
} 