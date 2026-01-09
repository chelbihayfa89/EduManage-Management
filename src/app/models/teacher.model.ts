import { User } from './user.model';

export interface Teacher extends User {
  speciality?: string;
  teacherCv?: string; // chemin du fichier PDF
  validated?: boolean;
}
