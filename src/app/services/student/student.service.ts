import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiUrl = 'http://localhost:3000/api/students';
  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get(this.apiUrl);
  }

  getStudentById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteStudentById(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateStudent(updateStudent: any) {
    return this.http.put(this.apiUrl, updateStudent);
  }

  addStudent(newStudent: any) {
    return this.http.post(this.apiUrl, newStudent);
  }
}
