import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade16Component } from './grade1.6.component';

describe('Grade16Component', () => {
  let component: Grade16Component;
  let fixture: ComponentFixture<Grade16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade16Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grade16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
