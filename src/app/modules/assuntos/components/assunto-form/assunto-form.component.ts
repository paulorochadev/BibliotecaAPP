import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Assunto } from '../../../../core/models/assunto.model';

@Component({
  selector: 'app-assunto-form',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule
  ],
  templateUrl: './assunto-form.component.html',
  styleUrl: './assunto-form.component.scss'
})
export class AssuntoFormComponent implements OnInit {
  @Input() assunto: Assunto | null = null;
  @Output() salvo = new EventEmitter<Assunto>();
  @Output() cancelado = new EventEmitter<void>();

  assuntoModel: Assunto = {
    id: 0,
    descricao: ''
  };

  ngOnInit(): void {
    if (this.assunto) {
      this.assuntoModel = { ...this.assunto };
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.salvo.emit(this.assuntoModel);
    }
  }

  onCancel(): void {
    this.cancelado.emit();
  }
}