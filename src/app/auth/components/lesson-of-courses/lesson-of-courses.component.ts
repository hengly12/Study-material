import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LESSON } from 'src/app/dummy/data-khmer';

@Component({
  selector: 'app-lesson-of-courses',
  templateUrl: './lesson-of-courses.component.html',
  styleUrls: ['./lesson-of-courses.component.scss']
})
export class LessonOfCoursesComponent {
  url: SafeResourceUrl|null = null
  lessonName : string = ''
  LESSON = LESSON

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      console.log('param',param)
      const { id } = param
      if( id ){
        this.lessonName = this.LESSON.find(f=>f?.key === id)?.name || ''
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+id);
      }
    })
  }
}
