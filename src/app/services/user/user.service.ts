import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/users';
  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get<{ users: User[] }>(this.apiUrl);
  }

  validateUser(id: string) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.patch<{ message: string }>(
      `${this.apiUrl}/${id}/validate`,
      {
        validated: true,
      },
      { headers },
    );
  }
  getUserById(id: string) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    console.log('getUserById called with:', id);
    return this.http.get<{ message: string; user: User }>(
      `${this.apiUrl}/${id}`,
      { headers },
    );
  }

  deleteUser(id: string) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`, {headers});
  }

  getProfile() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.get<{ message: string; user: User }>(
      `${this.apiUrl}/profile`,
      { headers },
    );
  }
}
