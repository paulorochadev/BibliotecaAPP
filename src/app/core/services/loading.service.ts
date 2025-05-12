import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private progressSubject = new BehaviorSubject<number>(0);
  
  public loading$ = this.loadingSubject.asObservable();
  public progress$ = this.progressSubject.asObservable();
  
  private activeRequests = 0;

  show(): void {
    this.activeRequests++;
    if (this.activeRequests === 1) {
      this.loadingSubject.next(true);
    }
  }

  hide(): void {
    this.activeRequests--;
    if (this.activeRequests <= 0) {
      this.activeRequests = 0;
      this.loadingSubject.next(false);
      this.resetProgress();
    }
  }

  setProgress(progress: number): void {
    this.progressSubject.next(Math.min(100, Math.max(0, progress)));
  }

  incrementProgress(value: number): void {
    this.progressSubject.next(Math.min(100, this.progressSubject.value + value));
  }

  reset(): void {
    this.activeRequests = 0;
    this.loadingSubject.next(false);
    this.resetProgress();
  }

  private resetProgress(): void {
    this.progressSubject.next(0);
  }
}