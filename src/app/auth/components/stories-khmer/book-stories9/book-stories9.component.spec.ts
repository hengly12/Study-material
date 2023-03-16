import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStories9Component } from './book-stories9.component';

describe('BookStories9Component', () => {
  let component: BookStories9Component;
  let fixture: ComponentFixture<BookStories9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookStories9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookStories9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
