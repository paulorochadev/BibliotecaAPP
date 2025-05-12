import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Livro } from '../../../../core/models/livro.model';

@Component({
  selector: 'app-livro-form',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule
  ],
  templateUrl: './livro-form.component.html',
  styleUrl: './livro-form.component.scss'
})
export class LivroFormComponent {
  @Input() livro: Livro | null = null;
  @Output() salvo = new EventEmitter<Livro>();
  @Output() cancelado = new EventEmitter<void>();

  livroModel: Livro = {
    id: 0,
    titulo: '',
    editora: '',
    edicao: 0,
    anoPublicacao: ''
  };

  ngOnInit(): void {
    if (this.livro) {
      this.livroModel = { ...this.livro };
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.salvo.emit(this.livroModel);
    }
  }

  onCancel(): void {
    this.cancelado.emit();
  }
}