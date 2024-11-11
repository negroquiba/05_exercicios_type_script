function filtrarDisponiveis(produtos) {
    return produtos.filter(function (produto) { return produto.disponivel; });
}
var produtos = [
    { nome: "Teclado", preco: 100, disponivel: true },
    { nome: "Mouse", preco: 50, disponivel: false },
    { nome: "Monitor", preco: 300, disponivel: true },
];
console.log(filtrarDisponiveis(produtos));
