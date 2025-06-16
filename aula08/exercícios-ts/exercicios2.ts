let cidades: string[] = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Porto Alegre', 'Curitiba'];

function listarCidades(cidades: string[]): void {
    cidades.forEach(cidade => console.log(cidade));
}

listarCidades(cidades);