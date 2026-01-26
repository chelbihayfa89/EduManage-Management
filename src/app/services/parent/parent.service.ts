import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { Student } from 'src/app/models/student.model';

@Injectable({
  providedIn: 'root',
})
export class ParentService {
  private apiUrl: string = 'http://localhost:3000/api/parent';
  constructor(private http: HttpClient) {}
  getStudentsByParent(criteria: { childPhone: string }) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    const params = new HttpParams().set('childPhone', criteria.childPhone);
    return this.http.get<{student: Student, courses: Course []}>(`${this.apiUrl}/students`, { headers, params });
  }
}
