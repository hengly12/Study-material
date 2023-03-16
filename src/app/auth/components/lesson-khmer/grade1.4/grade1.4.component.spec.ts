import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade14Component } from './grade1.4.component';

describe('Grade14Component', () => {
  let component: Grade14Component;
  let fixture: ComponentFixture<Grade14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grade14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
