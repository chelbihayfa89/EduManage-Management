import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BackToTopComponent } from './components/shared/back-to-top/back-to-top.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FacilitiesComponent } from './components/home/facilities/facilities.component';
import { AboutComponent } from './components/home/about/about.component';
import { CoursesComponent } from './components/home/courses/courses.component';
import { OneCourseComponent } from './components/home/one-course/one-course.component';
import { RegistrationComponent } from './components/home/registration/registration.component';
import { TestimonialsComponent } from './components/home/testimonials/testimonials.component';
import { OurTeachersComponent } from './components/home/our-teachers/our-teachers.component';
import { TeacherCardComponent } from './components/home/teacher-card/teacher-card.component';
import { BlogsComponent } from './components/home/blogs/blogs.component';
import { OneBlogComponent } from './components/home/one-blog/one-blog.component';
import { HomeComponent } from './components/home/home/home.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { LoginComponent } from './components/auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BackToTopComponent,
    NavbarComponent,
    FacilitiesComponent,
    AboutComponent,
    CoursesComponent,
    OneCourseComponent,
    RegistrationComponent,
    TestimonialsComponent,
    OurTeachersComponent,
    TeacherCardComponent,
    BlogsComponent,
    OneBlogComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
