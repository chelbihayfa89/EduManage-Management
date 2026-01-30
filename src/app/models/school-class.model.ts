import { Student } from "./student.model";
import { Teacher } from "./teacher.model";

export interface SchoolClass {
  _id?: string;
  name?: string;
  level?: string;
  teachers?: Teacher[];
  students?: Student[];
}
