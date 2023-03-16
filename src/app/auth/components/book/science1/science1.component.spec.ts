import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Science1Component } from './science1.component';

describe('Science1Component', () => {
  let component: Science1Component;
  let fixture: ComponentFixture<Science1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Science1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Science1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
