import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from 'src/app/models/note.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private apiUrl = 'http://localhost:3000/api/notes';
  constructor(private http: HttpClient) {}

  addNoteToStudent(note: Note) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post<{ message: string; note: Note }>(this.apiUrl, note, {
      headers,
    });
  }

  getCourseNote(courseId: string) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<{ message: string; note: Note }>(
      `${this.apiUrl}/course/${courseId}`,
      { headers },
    );
  }

  getCourseNoteForParent() {}
}
