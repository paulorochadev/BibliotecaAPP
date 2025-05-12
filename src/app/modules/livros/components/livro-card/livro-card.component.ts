import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Livro } from '../../../../core/models/livro.model';

@Component({
  selector: 'app-livro-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './livro-card.component.html',
  styleUrl: './livro-card.component.scss'
})
export class LivroCardComponent {
  @Input() livro!: Livro;
  @Output() editar = new EventEmitter<Livro>();
  @Output() excluir = new EventEmitter<number>();

  onEditar(): void {
    this.editar.emit(this.livro);
  }

  onExcluir(): void {
    this.excluir.emit(this.livro.id);
  }
}