import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStories6Component } from './book-stories6.component';

describe('BookStories6Component', () => {
  let component: BookStories6Component;
  let fixture: ComponentFixture<BookStories6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookStories6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookStories6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
