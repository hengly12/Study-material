import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Khmer1Component } from './auth/components/book/khmer1/khmer1.component';
import { Maths1Component } from './auth/components/book/maths1/maths1.component';
import { Science1Component } from './auth/components/book/science1/science1.component';
import { ComponentsComponent } from './auth/components/components.component';
import { ContactComponent } from './auth/components/contact/contact.component';
import { Grade11Component } from './auth/components/lesson-khmer/grade1.1/grade1.1.component';
import { Grade12Component } from './auth/components/lesson-khmer/grade1.2/grade1.2.component';
import { Grade13Component } from './auth/components/lesson-khmer/grade1.3/grade1.3.component';
import { Grade14Component } from './auth/components/lesson-khmer/grade1.4/grade1.4.component';
import { Grade15Component } from './auth/components/lesson-khmer/grade1.5/grade1.5.component';
import { Grade16Component } from './auth/components/lesson-khmer/grade1.6/grade1.6.component';
import { Grade1Component } from './auth/components/lesson-khmer/grade1/grade1.component';
import { LessonComponent } from './auth/components/lesson/lesson.component';
import { Lesson10Component } from './auth/components/lesson10/lesson10.component';
import { Lesson11Component } from './auth/components/lesson11/lesson11.component';
import { Lesson12Component } from './auth/components/lesson12/lesson12.component';
import { Lesson6Component } from './auth/components/lesson6/lesson6.component';
import { Lesson7Component } from './auth/components/lesson7/lesson7.component';
import { Lesson8Component } from './auth/components/lesson8/lesson8.component';
import { Lesson9Component } from './auth/components/lesson9/lesson9.component';
import { LocationComponent } from './auth/components/location/location.component';
import { EditProfileComponent } from './auth/components/profile/profile.component';
import { BookStoriesComponent } from './auth/components/stories-khmer/book-stories/book-stories.component';
import { BookStories1Component } from './auth/components/stories-khmer/book-stories1/book-stories1.component';
import { BookStories10Component } from './auth/components/stories-khmer/book-stories10/book-stories10.component';
import { BookStories11Component } from './auth/components/stories-khmer/book-stories11/book-stories11.component';
import { BookStories12Component } from './auth/components/stories-khmer/book-stories12/book-stories12.component';
import { BookStories13Component } from './auth/components/stories-khmer/book-stories13/book-stories13.component';
import { BookStories14Component } from './auth/components/stories-khmer/book-stories14/book-stories14.component';
import { BookStories15Component } from './auth/components/stories-khmer/book-stories15/book-stories15.component';
import { BookStories16Component } from './auth/components/stories-khmer/book-stories16/book-stories16.component';
import { BookStories2Component } from './auth/components/stories-khmer/book-stories2/book-stories2.component';
import { BookStories3Component } from './auth/components/stories-khmer/book-stories3/book-stories3.component';
import { BookStories4Component } from './auth/components/stories-khmer/book-stories4/book-stories4.component';
import { BookStories5Component } from './auth/components/stories-khmer/book-stories5/book-stories5.component';
import { BookStories6Component } from './auth/components/stories-khmer/book-stories6/book-stories6.component';
import { BookStories7Component } from './auth/components/stories-khmer/book-stories7/book-stories7.component';
import { BookStories8Component } from './auth/components/stories-khmer/book-stories8/book-stories8.component';
import { BookStories9Component } from './auth/components/stories-khmer/book-stories9/book-stories9.component';
import { SwiperComponent } from './auth/components/swiper/swiper.component';
import { FrontMainLayoutComponent } from './auth/layout/front-main-layout/front-main-layout.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';




const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: '',
    component: FrontMainLayoutComponent,
    children: [
      {
        path: 'components',
        component: ComponentsComponent,
      },
      {
        path: 'swiper',
        component: SwiperComponent,
      },
      {
        path: 'lesson',
        component: LessonComponent,
        children:[
          {
            path: 'bookstories',
            component: BookStoriesComponent,
          },
          {
            path: 'bookstories1',
            component: BookStories1Component,
          },
          {
            path: 'bookstories2',
            component: BookStories2Component,
          },
          {
            path: 'bookstories3',
            component: BookStories3Component,
          },
          {
            path: 'bookstories4',
            component: BookStories4Component,
          },
          {
            path: 'bookstories5',
            component: BookStories5Component,
          },
          {
            path: 'bookstories6',
            component: BookStories6Component,
          },
          {
            path: 'bookstories7',
            component: BookStories7Component,
          },
          {
            path: 'bookstories8',
            component: BookStories8Component,
          },
          {
            path: 'bookstories9',
            component: BookStories9Component,
          },
          {
            path: 'bookstories10',
            component: BookStories10Component,
          },
          {
            path: 'bookstories11',
            component: BookStories11Component,
          },
          {
            path: 'bookstories12',
            component: BookStories12Component,
          },
          {
            path: 'bookstories13',
            component: BookStories13Component,
          },
          {
            path: 'bookstories14',
            component: BookStories14Component,
          },
          {
            path: 'bookstories15',
            component: BookStories15Component,
          },
          {
            path: 'bookstories16',
            component: BookStories16Component,
          },
        ]
      },
      {
        path: 'lesson6',
        component: Lesson6Component,
      },
      {
        path: 'lesson7',
        component: Lesson7Component,
      },
      {
        path: 'lesson8',
        component: Lesson8Component,
      },
      {
        path: 'lesson9',
        component: Lesson9Component,
      },
      {
        path: 'lesson10',
        component: Lesson10Component,
      },
      {
        path: 'lesson11',
        component: Lesson11Component,
      },
      {
        path: 'lesson12',
        component: Lesson12Component,
      },

      {
        path: 'editprofile',
        component: EditProfileComponent,
      },
      {
        path: 'location',
        component: LocationComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'khmer1',
        component: Khmer1Component,
        children:[
          {
            path: 'grade1',
            component: Grade1Component,
          },
          {
            path: 'grade1.1',
            component: Grade11Component,
          },
          {
            path: 'grade1.2',
            component: Grade12Component,
          },
          {
            path: 'grade1.3',
            component: Grade13Component,
          },
          {
            path: 'grade1.4',
            component: Grade14Component,
          },
          {
            path: 'grade1.5',
            component: Grade15Component,
          },
          {
            path: 'grade1.6',
            component: Grade16Component,
          },
        ]
      },

      {
        path: 'maths1',
        component: Maths1Component,
      },
      {
        path: 'science1',
        component: Science1Component,
      },

      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'components',
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
