import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  private apiUrl = 'http://localhost:3000/teachers'; // URL de l'API

  constructor(private http: HttpClient) {}

  getTeachers() {
    return this.http.get(this.apiUrl);
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

  searchTeacherBySpeciality(speciality: string) {
    return this.http.get(`${this.apiUrl}/${speciality}`);
  }
}
