import { Course } from '../models/course';

export const COURSES: Course[] = [
  {
    id: 'C001',
    name: 'Angular Fundamentals',
    description:
      'Introduction aux bases d’Angular : composants, modules et data binding.',
    duration: 30,
  },
  {
    id: 'C002',
    name: 'TypeScript Avancé',
    description:
      'Approfondissement de TypeScript : interfaces, classes, generics.',
    duration: 25,
  },
  {
    id: 'C003',
    name: 'Node.js & Express',
    description: 'Création d’API REST avec Node.js, Express et MongoDB.',
    duration: 40,
  },
];
