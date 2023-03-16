import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStories14Component } from './book-stories14.component';

describe('BookStories14Component', () => {
  let component: BookStories14Component;
  let fixture: ComponentFixture<BookStories14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookStories14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookStories14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
