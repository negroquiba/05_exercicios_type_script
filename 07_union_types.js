function formatarEntrada(valor) {
    return typeof valor === "string" ? valor.toUpperCase() : valor * 10;
}
console.log(formatarEntrada("typescript")); // "TYPESCRIPT"
console.log(formatarEntrada(5)); // 50
