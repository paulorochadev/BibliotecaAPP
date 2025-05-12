import { Injectable } from '@angular/core';
import { Livro } from '../models/livro.model';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class LivroService {
  private readonly endpoint = 'api/livros';

  constructor(private api: ApiService) {}

  getAll() {
    return this.api.get<Livro[]>(this.endpoint);
  }

  getById(id: number) {
    return this.api.get<Livro>(`${this.endpoint}/${id}`);
  }

  create(livro: Livro) {
    return this.api.post<Livro>(this.endpoint, livro);
  }

  update(id: number, livro: Livro) {
    return this.api.put<void>(`${this.endpoint}/${id}`, livro);
  }

  delete(id: number) {
    return this.api.delete<void>(`${this.endpoint}/${id}`);
  }

  getPrecosByLivroId(livroId: number) {
    return this.api.get<any[]>(`${this.endpoint}/${livroId}/precos`);
  }

  addPrecoToLivro(livroId: number, preco: any) {
    return this.api.post<any>(`${this.endpoint}/${livroId}/precos`, preco);
  }
}