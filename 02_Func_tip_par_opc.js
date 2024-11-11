function saudacao(nome, idade) {
    return idade
        ? "Ol\u00E1, ".concat(nome, "! Voc\u00EA tem ").concat(idade, " anos.")
        : "Ol\u00E1, ".concat(nome, "!");
}
console.log(saudacao("Alice"));
console.log(saudacao("Bob", 30));
