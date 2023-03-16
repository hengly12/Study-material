import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStories3Component } from './book-stories3.component';

describe('BookStories3Component', () => {
  let component: BookStories3Component;
  let fixture: ComponentFixture<BookStories3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookStories3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookStories3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
