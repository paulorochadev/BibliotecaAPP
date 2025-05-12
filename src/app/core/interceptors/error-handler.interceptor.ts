import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationService } from '../../core/services/notification.service';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const notificationService = inject(NotificationService);
  
  return next(req).pipe(
    catchError(error => {
      notificationService.showError(error.message || 'Erro desconhecido');
      return throwError(() => error);
    })
  );
};