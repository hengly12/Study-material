import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonOfCoursesComponent } from './lesson-of-courses.component';

describe('LessonOfCoursesComponent', () => {
  let component: LessonOfCoursesComponent;
  let fixture: ComponentFixture<LessonOfCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonOfCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonOfCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
