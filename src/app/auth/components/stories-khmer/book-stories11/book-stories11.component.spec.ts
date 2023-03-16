import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStories11Component } from './book-stories11.component';

describe('BookStories11Component', () => {
  let component: BookStories11Component;
  let fixture: ComponentFixture<BookStories11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookStories11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookStories11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
