import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStories2Component } from './book-stories2.component';

describe('BookStories2Component', () => {
  let component: BookStories2Component;
  let fixture: ComponentFixture<BookStories2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookStories2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookStories2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
