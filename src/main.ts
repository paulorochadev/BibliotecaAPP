import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { errorHandlerInterceptor } from './app/core/interceptors/error-handler.interceptor';
import { loadingInterceptor } from './app/core/interceptors/loading.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([loadingInterceptor, errorHandlerInterceptor])
    ),
    provideClientHydration()
  ]
}).catch(err => console.error(err));