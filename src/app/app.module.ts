import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './components/home/components/banner/banner.component';
import { HomeComponent } from './components/home/home/home.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { NotFoundPageComponent } from './components/layout/not-found-page/not-found-page.component';
import { AboutComponent } from './components/pages/about/about.component';
import { BlogsComponent } from './components/pages/blogs/blogs.component';
import { BlogCardComponent } from './components/pages/blog-card/blog-card.component';
import { FacilitiesComponent } from './components/home/components/facilities/facilities.component';
import { TeachersComponent } from './components/teachers/teachers/teachers.component';
import { CoursesComponent } from './components/courses/courses/courses.component';
import { TeacherCardComponent } from './components/teachers/teacher-card/teacher-card.component';
import { CourseCardComponent } from './components/courses/course-card/course-card.component';
import { TestimonialsComponent } from './components/home/components/testimonials/testimonials.component';
import { SearchTeacherComponent } from './components/teachers/search-teacher/search-teacher.component';
import { HttpClientModule} from '@angular/common/http';
import { TeacherDashboardComponent } from './components/dashboards/teacher/teacher-dashboard/teacher-dashboard.component';
import { CourseInfoComponent } from './components/courses/course-info/course-info.component';
import { AdminDashboardComponent } from './components/dashboards/admin/admin-dashboard/admin-dashboard.component';
import { EditCourseByAdminComponent } from './components/courses/edit-course-by-admin/edit-course-by-admin.component';
import { EditCourseByTeacherComponent } from './components/courses/edit-course-by-teacher/edit-course-by-teacher.component';
import { AddCourseByTeacherComponent } from './components/courses/add-course-by-teacher/add-course-by-teacher.component';
import { ContactComponent } from './components/pages/contact/contact.component';

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
    AdminDashboardComponent,
    EditCourseByAdminComponent,
    EditCourseByTeacherComponent,
    AddCourseByTeacherComponent,
    ContactComponent,

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
