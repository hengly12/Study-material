import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maths1Component } from './maths1.component';

describe('Maths1Component', () => {
  let component: Maths1Component;
  let fixture: ComponentFixture<Maths1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Maths1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Maths1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
