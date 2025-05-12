export interface Livro {
  id: number;
  titulo: string;
  editora: string;
  edicao: number;
  anoPublicacao: string;
  autores?: Autor[];
  assuntos?: Assunto[];
  precos?: PrecoLivro[];
}

export interface PrecoLivro {
  id: number;
  livroId: number;
  valor: number;
  tipoCompra: string;
}

export interface Autor {
  id: number;
  nome: string;
}

export interface Assunto {
  id: number;
  descricao: string;
}