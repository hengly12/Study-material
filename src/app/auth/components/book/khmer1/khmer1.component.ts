import { Component, OnInit } from '@angular/core';
import { BOOK_KHMER, BOOK_KHMER1, BOOK_KHMER2, BOOK_KHMER2_2, BOOK_KHMER3, BOOK_KHMER3_1, BOOK_KHMER3_2, BOOK_KHMER3_3, BOOK_KHMER3_4, BOOK_KHMER3_5, BOOK_KHMER3_6, BOOK_KHMER4, BOOK_KHMER4_1,  } from 'src/app/dummy/data-khmer';


@Component({
  selector: 'app-khmer1',
  templateUrl: './khmer1.component.html',
  styleUrls: ['./khmer1.component.scss']
})
export class Khmer1Component implements OnInit {
  bookLessonData = BOOK_KHMER
  bookLessonData1 = BOOK_KHMER1
  bookLessonData2 = BOOK_KHMER2
  bookLessonData2_2 = BOOK_KHMER2_2
  bookLessonData3 = BOOK_KHMER3
  bookLessonData3_1 = BOOK_KHMER3_1
  bookLessonData3_2 = BOOK_KHMER3_2
  bookLessonData3_3 = BOOK_KHMER3_3
  bookLessonData3_4 = BOOK_KHMER3_4
  bookLessonData3_5 = BOOK_KHMER3_5
  bookLessonData3_6 = BOOK_KHMER3_6
  bookLessonData4= BOOK_KHMER4
  bookLessonData4_1= BOOK_KHMER4_1
  constructor() { }

  ngOnInit(): void {
  }
  showFiller = false;



}
