import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/user';
  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get<{users: any}>(this.apiUrl); // récupère tous les users
  }

  getUserById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`); // récupère un user par id
  }

  deleteUserById(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`); // supprime un user par id
  }

  updateUser(updatedUser: any) {
    return this.http.put(this.apiUrl, updatedUser); // met à jour un user
  }

  signup(newUser: any) {
    return this.http.post(this.apiUrl, newUser); // ajoute un nouveau user
  }
}
