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
    return this.http.get<{ message: string; teachers: Teacher[] }>(
      `${this.apiUrl}/all`,
    );
  }

  getTeachersBySpeciality(speciality?: string) {
    return speciality
      ? this.http.get<{ message: string; teachers: Teacher[] }>(
          `${this.apiUrl}?speciality=${speciality}`,
        )
      : this.http.get<{ teachers: Teacher[]}>(this.apiUrl);
  }

  getTeacherById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addTeacher(teacher: Teacher) {
    return this.http.post(this.apiUrl, teacher);
  }

  deleteTeacherById(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
