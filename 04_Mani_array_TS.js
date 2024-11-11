function calcularMedia(numeros) {
    var total = numeros.reduce(function (acc, numero) { return acc + numero; }, 0);
    return total / numeros.length;
}
console.log(calcularMedia([10, 20, 30, 40])); // 25
