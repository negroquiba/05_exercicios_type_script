interface Produto {
    nome: string;
    preco: number;
    disponivel: boolean;
}

function filtrarDisponiveis(produtos: Produto[]): Produto[] {
    return produtos.filter(produto => produto.disponivel);
}

const produtos: Produto[] = [
    { nome: "Teclado", preco: 100, disponivel: true },
    { nome: "Mouse", preco: 50, disponivel: false },
    { nome: "Monitor", preco: 300, disponivel: true },
];

console.log(filtrarDisponiveis(produtos));
