import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { GRADE_NAME, LESSON } from 'src/app/dummy/data-khmer';


@Component({
  selector: 'app-courses-lesson',
  templateUrl: './courses-lesson.component.html',
  styleUrls: ['./courses-lesson.component.scss']
})
export class CoursesLessonComponent {
  dataUser: any ;
  uid: string = '';
  inOut:string='';

  selectedLesson: any;

  LESSON = LESSON;
  GradeName = GRADE_NAME;

  constructor(
    private activatedRoute : ActivatedRoute,
    private fireauth : AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
  ){}

  ngOnInit(){

    this.fireauth.authState.subscribe((user) => {
      console.log('user', user);
      if (user) {
        this.uid = user?.uid;

        this.afs
          .collection('user')
          .doc(this.uid)
          .valueChanges()
          .subscribe((res) => {
            console.log('userID', res);
            this.dataUser = res;
          });
      }
    });

    this.activatedRoute.params.subscribe(params=>{
      const { courseKey,lessonKey } = params
      console.log('courseTypeKey',courseKey)
      if(lessonKey && lessonKey !== 'na'){
        this.selectedLesson = this.LESSON.find(f=>f.key === lessonKey)
      }
    })
  }
}
