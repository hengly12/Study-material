import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStories16Component } from './book-stories16.component';

describe('BookStories16Component', () => {
  let component: BookStories16Component;
  let fixture: ComponentFixture<BookStories16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookStories16Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookStories16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
