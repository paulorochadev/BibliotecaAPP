import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Assunto } from '../../../../core/models/assunto.model';

@Component({
  selector: 'app-assunto-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './assunto-card.component.html',
  styleUrl: './assunto-card.component.scss'
})
export class AssuntoCardComponent {
  @Input() assunto!: Assunto;
  @Output() editar = new EventEmitter<Assunto>();
  @Output() excluir = new EventEmitter<number>();

  onEditar(): void {
    this.editar.emit(this.assunto);
  }

  onExcluir(): void {
    this.excluir.emit(this.assunto.id);
  }
}