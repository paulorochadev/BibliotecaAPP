import { Injectable } from '@angular/core';
import { Autor } from '../models/autor.model';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class AutorService {
  private readonly endpoint = 'api/autores';

  constructor(private api: ApiService) {}

  getAll() {
    return this.api.get<Autor[]>(this.endpoint);
  }

  getById(id: number) {
    return this.api.get<Autor>(`${this.endpoint}/${id}`);
  }

  create(autor: Autor) {
    return this.api.post<Autor>(this.endpoint, autor);
  }

  update(id: number, autor: Autor) {
    return this.api.put<void>(`${this.endpoint}/${id}`, autor);
  }

  delete(id: number) {
    return this.api.delete<void>(`${this.endpoint}/${id}`);
  }
}