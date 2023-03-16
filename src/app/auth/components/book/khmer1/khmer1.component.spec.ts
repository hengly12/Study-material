import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Khmer1Component } from './khmer1.component';

describe('Khmer1Component', () => {
  let component: Khmer1Component;
  let fixture: ComponentFixture<Khmer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Khmer1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Khmer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
