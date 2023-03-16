import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStories15Component } from './book-stories15.component';

describe('BookStories15Component', () => {
  let component: BookStories15Component;
  let fixture: ComponentFixture<BookStories15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookStories15Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookStories15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
