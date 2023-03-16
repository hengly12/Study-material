import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStories7Component } from './book-stories7.component';

describe('BookStories7Component', () => {
  let component: BookStories7Component;
  let fixture: ComponentFixture<BookStories7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookStories7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookStories7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
