interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

let livroExemplo: Livro = {
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
    anoPublicacao: 1899
};

function exibirLivro(livro: Livro): void {
    console.log(`Título: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
}

exibirLivro(livroExemplo);