import { Injectable } from '@angular/core';
import { Assunto } from '../models/assunto.model';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class AssuntoService {
  private readonly endpoint = 'api/assuntos';

  constructor(private api: ApiService) {}

  getAll() {
    return this.api.get<Assunto[]>(this.endpoint);
  }

  getById(id: number) {
    return this.api.get<Assunto>(`${this.endpoint}/${id}`);
  }

  create(assunto: Assunto) {
    return this.api.post<Assunto>(this.endpoint, assunto);
  }

  update(id: number, assunto: Assunto) {
    return this.api.put<void>(`${this.endpoint}/${id}`, assunto);
  }

  delete(id: number) {
    return this.api.delete<void>(`${this.endpoint}/${id}`);
  }
}