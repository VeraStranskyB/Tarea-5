// 1- Definir las variables

const notasEstudiante = [6, 8, 9, 2, 5, 10];


// 2-Función para calcular la suma de las notas

function calcularSuma(notas) {
    let sumaTotal = 0; // Inicializamos la suma en 0
    for (let i = 0; i < notas.length; i++) {
        sumaTotal += notas[i]; // Sumamos cada nota a la suma total
    }
    return sumaTotal; // Retornamos la suma total
}

// 3-Función para calcular el promedio de las notas
function calcularPromedio(notas) {
    const suma = calcularSuma(notas); 
    const promedio = suma / notas.length; 
    return promedio; 
}

// 4-Comprobación de las funciones
const sumaNotas = calcularSuma(notasEstudiante);
const promedioNotas = calcularPromedio(notasEstudiante);

// 5-Mostrar resultados en la consola
console.log("Suma de notas:", sumaNotas); 
console.log("Promedio de notas:", promedioNotas);
