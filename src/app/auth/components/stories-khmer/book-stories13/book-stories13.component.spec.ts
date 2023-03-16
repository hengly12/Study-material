import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStories13Component } from './book-stories13.component';

describe('BookStories13Component', () => {
  let component: BookStories13Component;
  let fixture: ComponentFixture<BookStories13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookStories13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookStories13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
