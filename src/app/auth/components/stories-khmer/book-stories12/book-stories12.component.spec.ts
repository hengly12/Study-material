import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStories12Component } from './book-stories12.component';

describe('BookStories12Component', () => {
  let component: BookStories12Component;
  let fixture: ComponentFixture<BookStories12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookStories12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookStories12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
