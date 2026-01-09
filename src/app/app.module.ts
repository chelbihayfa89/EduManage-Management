import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home/home.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { AboutComponent } from './components/about/about.component';
import { BlogsComponent } from './components/pages/blogs/blogs.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { FacilitiesComponent } from './components/home/components/facilities/facilities.component';
import { TeachersComponent } from './components/pages/teachers/teachers.component';
import { CoursesComponent } from './components/pages/courses/courses.component';
import { TeacherCardComponent } from './components/teacher-card/teacher-card.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { TestimonialsComponent } from './components/home/components/testimonials/testimonials.component';
import { SearchTeacherComponent } from './components/pages/search-teacher/search-teacher.component';
import { HttpClientModule} from '@angular/common/http';
import { TeacherDashboardComponent } from './components/dashboards/teacher/teacher-dashboard/teacher-dashboard.component';
import { CourseInfoComponent } from './components/course-info/course-info.component';
import { AddCourseComponent } from './components/pages/add-course/add-course.component';
import { EditCourseComponent } from './components/pages/edit-course/edit-course.component';
import { AdminDashboardComponent } from './components/dashboards/admin/admin-dashboard/admin-dashboard.component';
import { EditCourseByAdminComponent } from './components/edit-course-by-admin/edit-course-by-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BannerComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    NotFoundPageComponent,
    AboutComponent,
    BlogsComponent,
    BlogCardComponent,
    FacilitiesComponent,
    TeachersComponent,
    CoursesComponent,
    TeacherCardComponent,
    CourseCardComponent,
    TestimonialsComponent,
    SearchTeacherComponent,
    TeacherDashboardComponent,
    CourseInfoComponent,
    AddCourseComponent,
    EditCourseComponent,
    AdminDashboardComponent,
    EditCourseByAdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
