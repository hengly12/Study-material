import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesLessonComponent } from './courses-lesson.component';

describe('CoursesLessonComponent', () => {
  let component: CoursesLessonComponent;
  let fixture: ComponentFixture<CoursesLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesLessonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
