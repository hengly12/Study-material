import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { LESSON } from 'src/app/dummy/data-khmer';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-lesson-display',
  templateUrl: './lesson-display.component.html',
  styleUrls: ['./lesson-display.component.scss']
})
export class LessonDisplayComponent {
  selectedLesson: any;
  LESSON = LESSON;
  url: SafeResourceUrl|null = null
  lessonName : string = ''
  constructor(
    private activatedRoute : ActivatedRoute,
    private fireauth : AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private sanitizer: DomSanitizer,

  ) {
    this.activatedRoute.params.subscribe(params=>{
      const { courseKey,lessonKey } = params
      console.log('courseTypeKey',courseKey)
      if(lessonKey && lessonKey !== 'na'){
        this.selectedLesson = this.LESSON.find(f=>f.key === lessonKey)
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+lessonKey);

      }
    })
  }

  ngOnInit(): void {

  }


}
