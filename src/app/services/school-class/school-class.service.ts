import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SchoolClass } from 'src/app/models/school-class.model';

@Injectable({
  providedIn: 'root',
})
export class SchoolClassService {
  private apiUrl = 'http://localhost:3000/api/school-classes';
  constructor(private http: HttpClient) {}

  addSchoolClass(schoolClass: SchoolClass) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post<{ message: string }>(this.apiUrl, schoolClass, {
      headers,
    });
  }

  getSchoolClasses() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<{ schoolClasses: SchoolClass[] }>(this.apiUrl, {
      headers,
    });
  }
}
