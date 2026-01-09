import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { CoursesComponent } from './components/courses/courses/courses.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TeachersComponent } from './components/teachers/teachers/teachers.component';
import { SearchTeacherComponent } from './components/teachers/search-teacher/search-teacher.component';
import { TeacherDashboardComponent } from './components/dashboards/teacher/teacher-dashboard/teacher-dashboard.component';
import { CourseInfoComponent } from './components/courses/course-info/course-info.component';
import { AdminDashboardComponent } from './components/dashboards/admin/admin-dashboard/admin-dashboard.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { EditCourseByAdminComponent } from './components/courses/edit-course-by-admin/edit-course-by-admin.component';
import { EditCourseByTeacherComponent } from './components/courses/edit-course-by-teacher/edit-course-by-teacher.component';

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
  { path: 'teacher/editCourse/:id', component: EditCourseByTeacherComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'admin/editCourse/:id', component: EditCourseByAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
