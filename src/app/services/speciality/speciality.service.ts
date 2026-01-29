import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpecialityService {
  private apiUrl = 'http://localhost:3000/api/specialities';
  constructor(private http: HttpClient) {}

  addSpeciality(speciality: { name: string }) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post<{ message: string }>(this.apiUrl, speciality, {
      headers,
    });
  }

  getSpecialities() {
    return this.http.get<{ specialities: any; message: string }>(this.apiUrl);
  }

  getSpecialityById(id: string) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<{speciality: any, message: string}>(`${this.apiUrl}/${id}`, { headers });
  }
}
