function filtrarPrecosAltos(precos) {
    return precos.filter(function (preco) { return preco > 100; });
}
console.log(filtrarPrecosAltos([50, 150, 200, 30])); // [150, 200]
