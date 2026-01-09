import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/course.model';


@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/api/courses';
  constructor(private http: HttpClient) {}

  getCourses() {
    return this.http.get<{ courses: Course[], message: string}>(this.apiUrl);
  }

  getCourseById(id: string) {
    return this.http.get<{ course?: Course; message?: string }>(
      `${this.apiUrl}/${id}`
    );
  }

  deleteCourseById(id: string) {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }

  updateCourse(updatedCourse: Course, id: string) {
    return this.http.put<{message: string, course: Course}>(`${this.apiUrl}/${id}`, updatedCourse) }

  addCourse(newCourse: Course) {
    return this.http.post<{message: string}>(this.apiUrl, newCourse);
  }
}
