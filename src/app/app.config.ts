import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { errorHandlerInterceptor } from '../app/core/interceptors/error-handler.interceptor';
import { loadingInterceptor } from '../app/core/interceptors/loading.interceptor';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([loadingInterceptor, errorHandlerInterceptor])
    ),
    provideClientHydration()
  ]
};