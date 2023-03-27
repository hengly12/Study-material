import { Component } from '@angular/core';
import { BOOK_LESSON } from 'src/app/dummy/data';

@Component({
  selector: 'app-grade10-experiment',
  templateUrl: './grade10-experiment.component.html',
  styleUrls: ['./grade10-experiment.component.scss']
})
export class Grade10ExperimentComponent {
  bookLessonData = BOOK_LESSON
}
