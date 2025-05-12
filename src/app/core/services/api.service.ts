import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  private getFullUrl(endpoint: string): string {
    return `${environment.apiUrl}/${endpoint}`;
  }

  get<T>(endpoint: string) {
    return this.http.get<T>(this.getFullUrl(endpoint));
  }

  post<T>(endpoint: string, body: any) {
    return this.http.post<T>(this.getFullUrl(endpoint), body);
  }

  put<T>(endpoint: string, body: any) {
    return this.http.put<T>(this.getFullUrl(endpoint), body);
  }

  delete<T>(endpoint: string) {
    return this.http.delete<T>(this.getFullUrl(endpoint));
  }
}