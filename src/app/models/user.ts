export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  role: 'Admin' | 'Teacher' | 'Student' | 'Parent';
  status: 'Validated' | 'Not Validated';
}
