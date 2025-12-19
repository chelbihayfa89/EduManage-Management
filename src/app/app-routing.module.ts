import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { LoginComponent } from './components/auth/login/login.component';
import { CoursesComponent } from './components/home/courses/courses.component';
import { TeacherCardComponent } from './components/home/teacher-card/teacher-card.component';
import { AboutComponent } from './components/home/about/about.component';
import { OurTeachersComponent } from './components/home/our-teachers/our-teachers.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './components/admin/admin-profile/admin-profile.component';
import { UserProfileComponent } from './components/admin/user-profile/user-profile.component';
import { TeacherDashboardComponent } from './components/teacher/teacher-dashboard/teacher-dashboard.component';
import { CourseInfoComponent } from './components/shared/course-info/course-info.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'teachers', component: OurTeachersComponent },
  {
    path: 'admin',
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'profile', component: AdminProfileComponent },
      { path: 'userProfile/:id', component: UserProfileComponent },
    ],
  },
  {
    path: 'teacher',
    children: [
      { path: 'dashboard', component: TeacherDashboardComponent },
      { path: 'courses/:id', component: CourseInfoComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
