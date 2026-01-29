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
import { ContactComponent } from './components/pages/contact/contact.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { AuthGuard } from './guards/guards/auth.guard';
import { AddCourseByTeacherComponent } from './components/courses/add-course-by-teacher/add-course-by-teacher.component';
import { AddCourseByAdminComponent } from './components/courses/add-course-by-admin/add-course-by-admin.component';
import { AddNoteComponent } from './components/notes/add-note/add-note.component';
import { StudentDashboardComponent } from './components/dashboards/student/student-dashboard/student-dashboard.component';
import { AddScpecialityComponent } from './components/specialities/add-speciality/add-scpeciality.component';
import { ParentDashboardComponent } from './components/dashboards/parent/parent-dashboard/parent-dashboard.component';
import { EditSpecialityComponent } from './components/specialities/edit-speciality/edit-speciality/edit-speciality.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'course/:id', component: CourseInfoComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'search-teachers', component: SearchTeacherComponent },
  { path: 'teachers/search', component: TeachersComponent },
  { path: 'register/:role', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard/teacher',
    component: TeacherDashboardComponent,
    canActivate: [AuthGuard],
    data: { role: 'teacher' },
  },
  { path: 'user/profile', component: UserInfoComponent },
  { path: 'teacher/editCourse/:id', component: EditCourseByTeacherComponent },
  {
    path: 'teacher/addCourse',
    component: AddCourseByTeacherComponent,
    canActivate: [AuthGuard],
    data: { role: 'teacher' },
  },
  {
    path: 'dashboard/admin',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    data: { role: 'admin' },
  },
  {
    path: 'admin/addCourse',
    component: AddCourseByAdminComponent,
    canActivate: [AuthGuard],
    data: { role: 'admin' },
  },
  { path: 'admin/editCourse/:id', component: EditCourseByAdminComponent },
  {
    path: 'admin/specialities/add',
    component: AddScpecialityComponent,
    canActivate: [AuthGuard],
    data: { role: 'admin' },
  },
  {
    path: 'admin/specialities/edit/:id',
    component: EditSpecialityComponent,
    canActivate: [AuthGuard],
    data: { role: 'admin' },
  },
  { path: 'user/:id', component: UserInfoComponent },
  {
    path: 'notes/add',
    component: AddNoteComponent,
    canActivate: [AuthGuard],
    data: { role: 'teacher' },
  },
  {
    path: 'dashboard/student',
    component: StudentDashboardComponent,
    canActivate: [AuthGuard],
    data: { role: 'student' },
  },
  {
    path: 'dashboard/parent',
    component: ParentDashboardComponent,
    canActivate: [AuthGuard],
    data: { role: 'parent' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
