import { Student } from "./student.model";

export interface Course {
  _id?: string;
  name?: string;
  description?: string;
  duration?: number;
  teacherId?: {      // <-- objet au lieu de string
    _id: string;
    firstName: string;
    lastName: string;
  };
  studentsIds?: Student[];
}
