import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/api/courses';
  constructor(private http: HttpClient) {}

  getCourses() {
    return this.http.get<{ courses: Course[]; message: string }>(this.apiUrl);
  }

  getCourseById(id: string) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<{ course?: Course; message?: string }>(
      `${this.apiUrl}/${id}`,
      { headers }
    );
  }

  deleteCourseById(id: string) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`, {
      headers,
    });
  }

  updateCourse(updatedCourse: Course, id: string) {
    return this.http.put<{ message: string; course: Course }>(
      `${this.apiUrl}/${id}`,
      updatedCourse
    );
  }

  addCourse(newCourse: Course) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post<{ message: string; course: Course }>(
      this.apiUrl,
      newCourse,
      {
        headers,
      }
    );
  }
  getTeacherCourses() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<{ message: string; foundCourses: Course[] }>(
      `${this.apiUrl}/teacher`,
      { headers }
    );
  }
}
