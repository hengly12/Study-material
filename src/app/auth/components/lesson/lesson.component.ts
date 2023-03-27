import { Component, OnInit } from '@angular/core';
import { BOOK_LESSON } from 'src/app/dummy/data';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

  bookLessonData = BOOK_LESSON

  constructor() { }

  ngOnInit(): void {

  }
}
