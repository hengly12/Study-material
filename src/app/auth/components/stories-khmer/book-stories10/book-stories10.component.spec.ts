import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStories10Component } from './book-stories10.component';

describe('BookStories10Component', () => {
  let component: BookStories10Component;
  let fixture: ComponentFixture<BookStories10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookStories10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookStories10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
