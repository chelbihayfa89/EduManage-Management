import { Course } from "./course.model";
import { Student } from "./student.model";
import { Teacher } from "./teacher.model";

export interface Evaluation {
  _id?: string;
  course?: string | Course;
  student?: string | Student;
  teacher?: string | Teacher;

  grade?: number;
  comment?: string;
}
