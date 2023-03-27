import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './auth/components/about/about.component';
import { AllCoursesComponent } from './auth/components/all-courses/all-courses.component';
import { Khmer1Component } from './auth/components/book/khmer1/khmer1.component';
import { Maths1Component } from './auth/components/book/maths1/maths1.component';
import { Science1Component } from './auth/components/book/science1/science1.component';
import { CategoryComponent } from './auth/components/category/category.component';
import { ComponentsComponent } from './auth/components/components.component';
import { ContactComponent } from './auth/components/contact/contact.component';
import { CoursePageComponent } from './auth/components/course1/course-page/course-page.component';
import { Course1Component } from './auth/components/course1/course1.component';
import { Grade10ExperimentComponent } from './auth/components/experiment-all/grade10-experiment/grade10-experiment.component';
import { Grade10Component } from './auth/components/Experiment/grade10/grade10.component';
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
import { RecentCoursesComponent } from './auth/components/recent-courses/recent-courses.component';
import { SkillComponent } from './auth/components/skill/skill.component';
import { BookStoriesComponent } from './auth/components/stories-khmer/book-stories/book-stories.component';
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
    path: 'course',
    component: FrontMainLayoutComponent,
    children:[
      { path:':courseTypeKey', component: CoursePageComponent}
     ]
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
        path: 'skill',
        component: SkillComponent,
      },
      {
        path: 'recent-courses',
        component: RecentCoursesComponent,
      },
      {
        path: 'all-courses',
        component: AllCoursesComponent,
      },
      {
        path: 'grade10-experiment',  component: Grade10ExperimentComponent,
        children:[
          {
            path:':id',component: Grade10Component,
          },
          {
            path: 'grade10',
            component: Grade10Component,
          },
        ]
      },
      {
        path: 'lesson',  component: LessonComponent,
        children:[
          {
            path:':id',component: BookStoriesComponent,
          },
          {
            path: 'bookstories',
            component: BookStoriesComponent,
          },
        ]
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'category',
        component: CategoryComponent,
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
            path:':id',component: Grade1Component,
          },
          {
            path: 'grade1',
            component: Grade1Component,
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
