/* Crear algoritmo que devuelva cantidad de numeros positivos de un Array */
let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
    let positivo = 0;
    for (numero of arr) {
        if (numero > 0) {
            positivo++
        }
    }
    return positivo
}


let resultado = cuantosPositivos(array);
console.log(resultado);