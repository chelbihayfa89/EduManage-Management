import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/api/course';
  constructor(private http: HttpClient) {}

  getCourses() {
    return this.http.get<{ courses: any }>(this.apiUrl);
  }

  getCourseById(id: number) {
    return this.http.get<{ course: any; message: string }>(
      `${this.apiUrl}/${id}`
    );
  }

  deleteCourseById(id: number) {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }

  updateCourse(updatedCourse: any, id: number) {
    return this.http.put<{message: string, course: any}>(`${this.apiUrl}/${id}`, updatedCourse);
  }

  addCourse(newCourse: any) {
    return this.http.post<{message: string}>(this.apiUrl, newCourse);
  }
}
