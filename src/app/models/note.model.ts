import { Course } from './course.model';
import { Student } from './student.model';

export interface Note {
  _id?: string;
  courseId?: string | Course;
  studentId?: string | Student;
  note: number;
  evaluation: string;
}
