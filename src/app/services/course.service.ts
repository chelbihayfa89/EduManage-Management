import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { COURSES } from '../data/courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
  getAllCourse(): Course[] {
    return COURSES;
  }
  getCourseById(id: string): Course{
    return COURSES.find(c => c.id == id)!;
  }
}
