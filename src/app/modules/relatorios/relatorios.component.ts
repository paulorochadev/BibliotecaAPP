import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RelatorioLivrosPorAutor } from '../../core/models/relatorio.model';
import { RelatorioService } from '../../core/services/relatorio.service';

@Component({
  selector: 'app-relatorios',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './relatorios.component.html',
  styleUrl: './relatorios.component.scss'
})
export class RelatoriosComponent implements OnInit {
  relatorioData: RelatorioLivrosPorAutor[] = [];
  loading = true;

  constructor(private relatorioService: RelatorioService) {}

  ngOnInit(): void {
    this.carregarRelatorio();
  }

  carregarRelatorio(): void {
    this.loading = true;
    this.relatorioService.getRelatorioLivrosPorAutor().subscribe({
      next: (data) => {
        this.relatorioData = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar relatório', err);
        this.loading = false;
      }
    });
  }
}