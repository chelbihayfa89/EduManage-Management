import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = 'http://localhost:3000/api/auth';
  constructor(private http: HttpClient) {}
  login(credentials: { tel: string; password: string }) {
    return this.http.post<{message: string, user: any}>(`${this.apiUrl}/login`, credentials);
  }

  register(user: any) {
    return this.http.post<{ message: string; user: any }>(`${this.apiUrl}/register`, user);
  }
}
