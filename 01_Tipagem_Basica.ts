let nome: string = "Alice";
let idade: number = 25;
let ativo: boolean = true;
let hobbies: string[] = ["Leitura", "Esportes", "Música"];
let endereco: { cidade: string; estado: string } = { cidade: "São Paulo", estado: "SP" };

console.log(`Nome: ${nome}, Idade: ${idade}, Ativo: ${ativo}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(`Endereço: ${endereco.cidade} - ${endereco.estado}`);
