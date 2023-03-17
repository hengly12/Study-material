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
import { Grade11Component } from './auth/components/lesson-khmer/grade1.1/grade1.1.component';
import { Grade12Component } from './auth/components/lesson-khmer/grade1.2/grade1.2.component';
import { Grade13Component } from './auth/components/lesson-khmer/grade1.3/grade1.3.component';
import { Grade14Component } from './auth/components/lesson-khmer/grade1.4/grade1.4.component';
import { Grade15Component } from './auth/components/lesson-khmer/grade1.5/grade1.5.component';
import { Grade16Component } from './auth/components/lesson-khmer/grade1.6/grade1.6.component';
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
import { BookStories1Component } from './auth/components/stories-khmer/book-stories1/book-stories1.component';
import { BookStories2Component } from './auth/components/stories-khmer/book-stories2/book-stories2.component';
import { BookStories3Component } from './auth/components/stories-khmer/book-stories3/book-stories3.component';
import { BookStories4Component } from './auth/components/stories-khmer/book-stories4/book-stories4.component';
import { BookStories5Component } from './auth/components/stories-khmer/book-stories5/book-stories5.component';
import { BookStories6Component } from './auth/components/stories-khmer/book-stories6/book-stories6.component';
import { BookStories7Component } from './auth/components/stories-khmer/book-stories7/book-stories7.component';
import { BookStories8Component } from './auth/components/stories-khmer/book-stories8/book-stories8.component';
import { BookStories9Component } from './auth/components/stories-khmer/book-stories9/book-stories9.component';
import { BookStories10Component } from './auth/components/stories-khmer/book-stories10/book-stories10.component';
import { BookStories11Component } from './auth/components/stories-khmer/book-stories11/book-stories11.component';
import { BookStories12Component } from './auth/components/stories-khmer/book-stories12/book-stories12.component';
import { BookStories13Component } from './auth/components/stories-khmer/book-stories13/book-stories13.component';
import { BookStories14Component } from './auth/components/stories-khmer/book-stories14/book-stories14.component';
import { BookStories15Component } from './auth/components/stories-khmer/book-stories15/book-stories15.component';
import { BookStories16Component } from './auth/components/stories-khmer/book-stories16/book-stories16.component';
import { AboutComponent } from './auth/components/about/about.component';
import { CategoryComponent } from './auth/components/category/category.component';

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
    Grade11Component,
    Grade12Component,
    Grade13Component,
    Grade14Component,
    Grade15Component,
    Grade16Component,
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
    BookStories1Component,
    BookStories2Component,
    BookStories3Component,
    BookStories4Component,
    BookStories5Component,
    BookStories6Component,
    BookStories7Component,
    BookStories8Component,
    BookStories9Component,
    BookStories10Component,
    BookStories11Component,
    BookStories12Component,
    BookStories13Component,
    BookStories14Component,
    BookStories15Component,
    BookStories16Component,
    AboutComponent,
    CategoryComponent


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
