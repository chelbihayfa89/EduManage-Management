import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getDashboard(role: string) {
    // Récupérer le token depuis le sessionStorage (ou localStorage)
    const token = sessionStorage.getItem('token'); 
    if (!token) {
      throw new Error('Token not found');
    }

    // Créer les headers avec le token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    // Faire la requête GET
    return this.http.get<{ message: string; teacher: any }>(
      `http://localhost:3000/api/dashboard/${role}`,
      { headers }
    );
  }
}
