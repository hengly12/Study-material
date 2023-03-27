import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BOOK_LESSON } from 'src/app/dummy/data';

@Component({
  selector: 'app-grade10',
  templateUrl: './grade10.component.html',
  styleUrls: ['./grade10.component.scss']
})
export class Grade10Component {
  url: SafeResourceUrl|null = null
  lessonName : string = ''
  bookLessonData = BOOK_LESSON

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      console.log('param',param)
      const { id } = param
      if( id ){
        this.lessonName = this.bookLessonData.find(f=>f?.key === id)?.name || ''
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+id);
      }
    })
  }

}
