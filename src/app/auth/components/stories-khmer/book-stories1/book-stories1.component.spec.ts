import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStories1Component } from './book-stories1.component';

describe('BookStories1Component', () => {
  let component: BookStories1Component;
  let fixture: ComponentFixture<BookStories1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookStories1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookStories1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
