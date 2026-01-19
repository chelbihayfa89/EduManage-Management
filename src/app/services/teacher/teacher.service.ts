import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Teacher } from 'src/app/models/teacher.model';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  private apiUrl = 'http://localhost:3000/api/teachers'; // URL de l'API

  constructor(private http: HttpClient) {}

  getAllTeachers() {
    return this.http.get<{message: string, foundUsers: any}>(`${this.apiUrl}/all`);
  }

  getTeachers(speciality?: string) {
    return speciality
      ? this.http.get<{ teachers: any }>(
          `${this.apiUrl}?speciality=${speciality}`,
        )
      : this.http.get<{ teachers: any }>(this.apiUrl);
  }

  getTeacherById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addTeacher(teacher: any) {
    return this.http.post(this.apiUrl, teacher);
  }

  updateTeacher(teacher: any) {
    return this.http.put(this.apiUrl, teacher);
  }

  deleteTeacherById(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
