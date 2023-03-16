import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStories8Component } from './book-stories8.component';

describe('BookStories8Component', () => {
  let component: BookStories8Component;
  let fixture: ComponentFixture<BookStories8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookStories8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookStories8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
