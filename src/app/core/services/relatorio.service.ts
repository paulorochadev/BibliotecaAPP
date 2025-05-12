import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '.././../../environments/environment';
import { RelatorioLivrosPorAutor } from '../models/relatorio.model';

@Injectable({ providedIn: 'root' })
export class RelatorioService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getRelatorioLivrosPorAutor() {
    return this.http.get<RelatorioLivrosPorAutor[]>(`${this.apiUrl}/api/relatorios/livros-por-autor`);
  }
}