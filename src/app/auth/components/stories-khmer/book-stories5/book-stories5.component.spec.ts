import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStories5Component } from './book-stories5.component';

describe('BookStories5Component', () => {
  let component: BookStories5Component;
  let fixture: ComponentFixture<BookStories5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookStories5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookStories5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
