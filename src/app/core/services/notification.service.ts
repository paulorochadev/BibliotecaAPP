import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type NotificationType = 'success' | 'error';

export interface Notification {
  message: string;
  type: NotificationType;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private notificationSubject = new BehaviorSubject<Notification | null>(null);
  notification$ = this.notificationSubject.asObservable();

  showSuccess(message: string): void {
    this.notificationSubject.next({ message, type: 'success' });
  }

  showError(message: string): void {
    this.notificationSubject.next({ message, type: 'error' });
  }

  clear(): void {
    this.notificationSubject.next(null);
  }
}