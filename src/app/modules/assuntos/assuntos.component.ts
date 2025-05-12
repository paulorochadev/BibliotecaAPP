import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Assunto } from '../../core/models/assunto.model';
import { AssuntoService } from '../../core/services/assunto.service';
import { AssuntoCardComponent } from './components/assunto-card/assunto-card.component';
import { AssuntoFormComponent } from './components/assunto-form/assunto-form.component';

@Component({
  selector: 'app-assuntos',
  standalone: true,
  imports: [
    CommonModule, 
    AssuntoCardComponent, 
    AssuntoFormComponent
  ],
  templateUrl: './assuntos.component.html',
  styleUrl: './assuntos.component.scss'
})
export class AssuntosComponent implements OnInit {
  assuntos: Assunto[] = [];
  assuntoEditando: Assunto | null = null;
  showForm = false;

  constructor(private assuntoService: AssuntoService) {}

  ngOnInit(): void {
    this.carregarAssuntos();
  }

  carregarAssuntos(): void {
    this.assuntoService.getAll().subscribe({
      next: (assuntos) => this.assuntos = assuntos,
      error: (err) => console.error('Erro ao carregar assuntos', err)
    });
  }

  novoAssunto(): void {
    this.assuntoEditando = null;
    this.showForm = true;
  }

  editarAssunto(assunto: Assunto): void {
    this.assuntoEditando = assunto;
    this.showForm = true;
  }

  onSalvo(assunto: Assunto): void {
    this.showForm = false;
    this.carregarAssuntos();
  }

  onCancelado(): void {
    this.showForm = false;
  }

  excluirAssunto(id: number): void {
    if (confirm('Tem certeza que deseja excluir este assunto?')) {
      this.assuntoService.delete(id).subscribe({
        next: () => this.carregarAssuntos(),
        error: (err) => console.error('Erro ao excluir assunto', err)
      });
    }
  }
}