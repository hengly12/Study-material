import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { COURSE, GRADE_LEVEL } from 'src/app/dummy/data-khmer';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {
  courseData:any[] = []
  dataUser: any ;
  uid: string = '';
  inOut:string='';
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
      const { courseTypeKey } = params
      console.log('courseTypeKey',courseTypeKey)
      const selectedGradeLevel = Object.values(GRADE_LEVEL).filter(f=>f?.course_type?.key === courseTypeKey)
      this.courseData=selectedGradeLevel?.map(m=>{
        const courses = COURSE.filter(f=>f.grade_level.key === m.key)
        return {
          ...m,
          courses: courses || []
        }
      }) || []
    })


  }

  isClick(){

    if(this.dataUser?.key == null){
      this.router.navigate(['login'])
    } else{

    }
  }
}
