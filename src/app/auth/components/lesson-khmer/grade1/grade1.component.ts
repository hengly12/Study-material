import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BOOK_KHMER, BOOK_KHMER1, BOOK_KHMER2, BOOK_KHMER2_2, BOOK_KHMER3, BOOK_KHMER3_1, BOOK_KHMER3_2, BOOK_KHMER3_3, BOOK_KHMER3_4, BOOK_KHMER3_5, BOOK_KHMER3_6, BOOK_KHMER4, BOOK_KHMER4_1,} from 'src/app/dummy/data-khmer';

@Component({
  selector: 'app-grade1',
  templateUrl: './grade1.component.html',
  styleUrls: ['./grade1.component.scss']
})
export class Grade1Component implements OnInit {
  url: SafeResourceUrl|null = null
  lessonName : string = ''
  bookLessonData = BOOK_KHMER
  lessonName1 : string = ''
  bookLessonData1 = BOOK_KHMER1
  lessonName2 : string = ''
  bookLessonData2 = BOOK_KHMER2
  lessonName2_2 : string = ''
  bookLessonData2_2 = BOOK_KHMER2_2
  lessonName3 : string = ''
  bookLessonData3 = BOOK_KHMER3
  lessonName3_1 : string = ''
  bookLessonData3_1 = BOOK_KHMER3_1
  lessonName3_2 : string = ''
  bookLessonData3_2 = BOOK_KHMER3_2
  lessonName3_3 : string = ''
  bookLessonData3_3 = BOOK_KHMER3_3
  lessonName3_4 : string = ''
  bookLessonData3_4 = BOOK_KHMER3_4
  lessonName3_5 : string = ''
  bookLessonData3_5 = BOOK_KHMER3_5
  lessonName3_6 : string = ''
  bookLessonData3_6 = BOOK_KHMER3_6
  lessonName4 : string = ''
  bookLessonData4 = BOOK_KHMER4
  lessonName4_1 : string = ''
  bookLessonData4_1 = BOOK_KHMER4_1
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
        this.lessonName1 = this.bookLessonData1.find(f=>f?.key === id)?.name || ''
        this.lessonName2 = this.bookLessonData2.find(f=>f?.key === id)?.name || ''
        this.lessonName2_2 = this.bookLessonData2_2.find(f=>f?.key === id)?.name || ''
        this.lessonName3 = this.bookLessonData3.find(f=>f?.key === id)?.name || ''
        this.lessonName3_1 = this.bookLessonData3_1.find(f=>f?.key === id)?.name || ''
        this.lessonName3_2 = this.bookLessonData3_2.find(f=>f?.key === id)?.name || ''
        this.lessonName3_3 = this.bookLessonData3_3.find(f=>f?.key === id)?.name || ''
        this.lessonName3_4 = this.bookLessonData3_4.find(f=>f?.key === id)?.name || ''
        this.lessonName3_5 = this.bookLessonData3_5.find(f=>f?.key === id)?.name || ''
        this.lessonName3_6 = this.bookLessonData3_6.find(f=>f?.key === id)?.name || ''
        this.lessonName4 = this.bookLessonData4.find(f=>f?.key === id)?.name || ''
        this.lessonName4_1 = this.bookLessonData4_1.find(f=>f?.key === id)?.name || ''
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+id);
      }
    })
  }

}
