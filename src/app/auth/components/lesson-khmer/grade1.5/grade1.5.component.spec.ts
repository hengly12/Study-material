import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade15Component } from './grade1.5.component';

describe('Grade15Component', () => {
  let component: Grade15Component;
  let fixture: ComponentFixture<Grade15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade15Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grade15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
