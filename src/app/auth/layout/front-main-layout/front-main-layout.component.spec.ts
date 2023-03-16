import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontMainLayoutComponent } from './front-main-layout.component';

describe('FrontMainLayoutComponent', () => {
  let component: FrontMainLayoutComponent;
  let fixture: ComponentFixture<FrontMainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontMainLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
