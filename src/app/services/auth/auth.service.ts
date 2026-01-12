import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = 'http://localhost:3000/api/auth';
  constructor(private http: HttpClient) {}
  login(credentials: any) {
    return this.http.post<{message: string, user: User}>(`${this.apiUrl}/login`, credentials);
  }

  register(user: any) {
    return this.http.post<{ message: string; user: any }>(`${this.apiUrl}/register`, user);
  }
}
