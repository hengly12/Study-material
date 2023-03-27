import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { ComponentsComponent } from './auth/components/components.component';
import { FrontMainLayoutComponent } from './auth/layout/front-main-layout/front-main-layout.component';
import { NavbarComponent } from './auth/components/navbar/navbar.component';
import { SwiperComponent } from './auth/components/swiper/swiper.component';
import { CourseComponent } from './auth/components/course/course.component';
import { Lesson6Component } from './auth/components/lesson6/lesson6.component';
import { Lesson7Component } from './auth/components/lesson7/lesson7.component';
import { Lesson8Component } from './auth/components/lesson8/lesson8.component';
import { Lesson9Component } from './auth/components/lesson9/lesson9.component';
import { Lesson10Component } from './auth/components/lesson10/lesson10.component';
import { Lesson11Component } from './auth/components/lesson11/lesson11.component';
import { Lesson12Component } from './auth/components/lesson12/lesson12.component';
import { Khmer1Component } from './auth/components/book/khmer1/khmer1.component';
import { Maths1Component } from './auth/components/book/maths1/maths1.component';
import { Science1Component } from './auth/components/book/science1/science1.component';
import { Grade1Component } from './auth/components/lesson-khmer/grade1/grade1.component';
import { FooterComponent } from './auth/components/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MaterialModule } from './auth/shared/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProfileComponent} from './auth/components/profile/profile.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LayoutLoginComponent } from './auth/layout/layout-login/layout-login.component';
import { LocationComponent } from './auth/components/location/location.component';
import { ContactComponent } from './auth/components/contact/contact.component';
import { SwiperAutoComponent } from './auth/components/swiper-auto/swiper-auto.component';
import { LessonComponent } from './auth/components/lesson/lesson.component';
import { BookStoriesComponent } from './auth/components/stories-khmer/book-stories/book-stories.component';
import { AboutComponent } from './auth/components/about/about.component';
import { CategoryComponent } from './auth/components/category/category.component';
import { SkillComponent } from './auth/components/skill/skill.component';
import { RecentCoursesComponent } from './auth/components/recent-courses/recent-courses.component';
import { AllCoursesComponent } from './auth/components/all-courses/all-courses.component';
import { Grade10Component } from './auth/components/Experiment/grade10/grade10.component';
import { Grade12Component } from './auth/components/Experiment/grade12/grade12.component';
import { Grade10ExperimentComponent } from './auth/components/experiment-all/grade10-experiment/grade10-experiment.component';
import { CoursePageComponent } from './auth/components/course1/course-page/course-page.component';
import { Course1Component } from './auth/components/course1/course1.component';




@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    FrontMainLayoutComponent,
    NavbarComponent,
    SwiperComponent,
    CourseComponent,
    Lesson6Component,
    Lesson7Component,
    Lesson8Component,
    Lesson9Component,
    Lesson10Component,
    Lesson11Component,
    Lesson12Component,
    Khmer1Component,
    Maths1Component,
    Science1Component,
    Grade1Component,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    EditProfileComponent,
    LayoutLoginComponent,
    LocationComponent,
    ContactComponent,
    SwiperAutoComponent,
    LessonComponent,
    BookStoriesComponent,
    AboutComponent,
    CategoryComponent,
    SkillComponent,
    RecentCoursesComponent,
    AllCoursesComponent,
    Grade10Component,
    Grade12Component,
    Grade10ExperimentComponent,
    CoursePageComponent,
    Course1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatBottomSheetModule,
    MatSidenavModule,
    MaterialModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    MaterialModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
