import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { Note } from 'src/app/models/note.model';
import { Student } from 'src/app/models/student.model';

@Injectable({
  providedIn: 'root',
})
export class ParentService {
  private apiUrl: string = 'http://localhost:3000/api/parent';
  constructor(private http: HttpClient) {}
  getStudentCoursesForParent(criteria: { childPhone: string }) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    const params = new HttpParams().set('childPhone', criteria.childPhone);
    return this.http.get<{ student: Student; courses: Course[] }>(
      `${this.apiUrl}/students/with-courses`,
      { headers, params },
    );
  }

  getStudentCourseNote(childId: string, courseId: string) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<{note: Note}>(
      `${this.apiUrl}/students/${childId}/courses/${courseId}/note`,
      {
        headers,
      },
    );
  }
}
