import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStoriesComponent } from './book-stories.component';

describe('BookStoriesComponent', () => {
  let component: BookStoriesComponent;
  let fixture: ComponentFixture<BookStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookStoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
