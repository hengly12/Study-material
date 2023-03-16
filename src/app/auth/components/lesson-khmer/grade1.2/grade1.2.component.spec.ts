import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade12Component } from './grade1.2.component';

describe('Grade12Component', () => {
  let component: Grade12Component;
  let fixture: ComponentFixture<Grade12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grade12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
