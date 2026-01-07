import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { CoursesComponent } from './components/pages/courses/courses.component';
import { AboutComponent } from './components/about/about.component';
import { TeachersComponent } from './components/pages/teachers/teachers.component';
import { SearchTeacherComponent } from './components/pages/search-teacher/search-teacher.component';
import { TeacherDashboardComponent } from './components/dashboards/teacher/teacher-dashboard/teacher-dashboard.component';
import { CourseInfoComponent } from './components/course-info/course-info.component';
import { AddCourseComponent } from './components/pages/add-course/add-course.component';
import { EditCourseComponent } from './components/pages/edit-course/edit-course.component';
import { AdminDashboardComponent } from './components/dashboards/admin/admin-dashboard/admin-dashboard.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'about', component: AboutComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'course/:id', component: CourseInfoComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'search-teachers', component: SearchTeacherComponent },
  { path: 'teachers/search', component: TeachersComponent },
  { path: 'register/:role', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'teacher/dashboard', component: TeacherDashboardComponent },
  { path: 'teacher/addCourse', component: AddCourseComponent },
  { path: 'teacher/editCourse/:id', component: EditCourseComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
