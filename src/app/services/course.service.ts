import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/api/courses';
  constructor(private http: HttpClient) {}

  getCourses() {
    return this.http.get<{ courses: any, message: string}>(this.apiUrl);
  }

  getCourseById(id: any) {
    return this.http.get<{ course?: any; message?: string }>(
      `${this.apiUrl}/${id}`
    );
  }

  deleteCourseById(id: any) {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }

  updateCourse(updatedCourse: any, id: any) {
    return this.http.put<{message: string, course: any}>(`${this.apiUrl}/${id}`, updatedCourse);
  }

  addCourse(newCourse: any) {
    return this.http.post<{message: string}>(this.apiUrl, newCourse);
  }
}
