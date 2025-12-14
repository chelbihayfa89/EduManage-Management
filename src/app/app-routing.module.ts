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
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {path: "login", component: LoginComponent},
  {path: "about", component: AboutComponent},
  {path: "courses", component: CoursesComponent},
  {path: "teachers", component: OurTeachersComponent},
  {path: "adminDashboard", component: AdminDashboardComponent},
  {path: "test", component: TestComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
