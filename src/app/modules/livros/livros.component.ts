import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Livro } from '../../core/models/livro.model';
import { LivroService } from '../../core/services/livro.service';
import { LivroCardComponent } from './components/livro-card/livro-card.component';
import { LivroFormComponent } from './components/livro-form/livro-form.component';

@Component({
  selector: 'app-livros',
  standalone: true,
  imports: [
    CommonModule, 
    LivroCardComponent, 
    LivroFormComponent
  ],
  templateUrl: './livros.component.html',
  styleUrl: './livros.component.scss'
})
export class LivrosComponent implements OnInit {
  livros: Livro[] = [];
  livroEditando: Livro | null = null;
  showForm = false;

  constructor(private livroService: LivroService) {}

  ngOnInit(): void {
    this.carregarLivros();
  }

  carregarLivros(): void {
    this.livroService.getAll().subscribe({
      next: (livros) => this.livros = livros,
      error: (err) => console.error('Erro ao carregar livros', err)
    });
  }

  novoLivro(): void {
    this.livroEditando = null;
    this.showForm = true;
  }

  editarLivro(livro: Livro): void {
    this.livroEditando = livro;
    this.showForm = true;
  }

  onSalvo(livro: Livro): void {
    this.showForm = false;
    this.carregarLivros();
  }

  onCancelado(): void {
    this.showForm = false;
  }

  excluirLivro(id: number): void {
    if (confirm('Tem certeza que deseja excluir este livro?')) {
      this.livroService.delete(id).subscribe({
        next: () => this.carregarLivros(),
        error: (err) => console.error('Erro ao excluir livro', err)
      });
    }
  }
}