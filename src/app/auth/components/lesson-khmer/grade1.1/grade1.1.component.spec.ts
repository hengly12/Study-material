import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade11Component } from './grade1.1.component';

describe('Grade11Component', () => {
  let component: Grade11Component;
  let fixture: ComponentFixture<Grade11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grade11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
