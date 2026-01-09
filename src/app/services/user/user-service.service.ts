import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private apiUrl: string = 'http://localhost:3000/api/user';
  private authUrl: string = 'http://localhost:3000/api/auth';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.apiUrl);
  }

  getUserById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateUser(id: number, updatedUser: any) {
    return this.http.put(`${this.apiUrl}/${id}`, updatedUser);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  register(newUser: any) {
    return this.http.post(this.apiUrl, newUser);
  }

  login(credentials: any) {
    return this.http.post(`${this.authUrl}/login`, credentials);
  }
}
