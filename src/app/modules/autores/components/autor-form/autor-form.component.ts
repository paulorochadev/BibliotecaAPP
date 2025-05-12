import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Autor } from '../../../../core/models/autor.model';

@Component({
  selector: 'app-autor-form',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule
  ],
  templateUrl: './autor-form.component.html',
  styleUrl: './autor-form.component.scss'
})
export class AutorFormComponent {
  @Input() autor: Autor | null = null;
  @Output() salvo = new EventEmitter<Autor>();
  @Output() cancelado = new EventEmitter<void>();

  autorModel: Autor = {
    id: 0,
    nome: ''
  };

  ngOnInit(): void {
    if (this.autor) {
      this.autorModel = { ...this.autor };
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.salvo.emit(this.autorModel);
    }
  }

  onCancel(): void {
    this.cancelado.emit();
  }
}