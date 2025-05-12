import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Autor } from '../../../../core/models/autor.model';

@Component({
  selector: 'app-autor-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './autor-card.component.html',
  styleUrl: './autor-card.component.scss'
})
export class AutorCardComponent {
  @Input() autor!: Autor;
  @Output() editar = new EventEmitter<Autor>();
  @Output() excluir = new EventEmitter<number>();

  onEditar(): void {
    this.editar.emit(this.autor);
  }

  onExcluir(): void {
    this.excluir.emit(this.autor.id);
  }
}