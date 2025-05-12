import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LoadingService } from '../../../core/services/loading.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  @Input() showText: boolean = true;
  @Input() showProgress: boolean = false;
  @Input() progress: number = 0;

  constructor(public loadingService: LoadingService) {
    
  }
}