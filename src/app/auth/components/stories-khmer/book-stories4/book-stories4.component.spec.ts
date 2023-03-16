import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStories4Component } from './book-stories4.component';

describe('BookStories4Component', () => {
  let component: BookStories4Component;
  let fixture: ComponentFixture<BookStories4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookStories4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookStories4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
