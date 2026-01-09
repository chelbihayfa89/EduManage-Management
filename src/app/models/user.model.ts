export interface User {
  _id: string;
  role?: 'Admin' | 'Teacher' | 'Student' | 'Parent';
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: string;
  password?: string;
}
