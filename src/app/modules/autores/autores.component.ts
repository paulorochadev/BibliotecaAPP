import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Autor } from '../../core/models/autor.model';
import { AutorService } from '../../core/services/autor.service';
import { AutorCardComponent } from './components/autor-card/autor-card.component';
import { AutorFormComponent } from './components/autor-form/autor-form.component';

@Component({
  selector: 'app-autores',
  standalone: true,
  imports: [
    CommonModule, 
    AutorCardComponent, 
    AutorFormComponent
  ],
  templateUrl: './autores.component.html',
  styleUrl: './autores.component.scss'
})
export class AutoresComponent implements OnInit {
  autores: Autor[] = [];
  autorEditando: Autor | null = null;
  showForm = false;

  constructor(private autorService: AutorService) {}

  ngOnInit(): void {
    this.carregarAutores();
  }

  carregarAutores(): void {
    this.autorService.getAll().subscribe({
      next: (autores) => this.autores = autores,
      error: (err) => console.error('Erro ao carregar autores', err)
    });
  }

  novoAutor(): void {
    this.autorEditando = null;
    this.showForm = true;
  }

  editarAutor(autor: Autor): void {
    this.autorEditando = autor;
    this.showForm = true;
  }

  onSalvo(autor: Autor): void {
    this.showForm = false;
    this.carregarAutores();
  }

  onCancelado(): void {
    this.showForm = false;
  }

  excluirAutor(id: number): void {
    if (confirm('Tem certeza que deseja excluir este autor?')) {
      this.autorService.delete(id).subscribe({
        next: () => this.carregarAutores(),
        error: (err) => console.error('Erro ao excluir autor', err)
      });
    }
  }
}