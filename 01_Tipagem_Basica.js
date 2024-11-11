var nome = "Alice";
var idade = 25;
var ativo = true;
var hobbies = ["Leitura", "Esportes", "Música"];
var endereco = { cidade: "São Paulo", estado: "SP" };
console.log("Nome: ".concat(nome, ", Idade: ").concat(idade, ", Ativo: ").concat(ativo));
console.log("Hobbies: ".concat(hobbies.join(", ")));
console.log("Endere\u00E7o: ".concat(endereco.cidade, " - ").concat(endereco.estado));
