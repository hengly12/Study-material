import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperAutoComponent } from './swiper-auto.component';

describe('SwiperAutoComponent', () => {
  let component: SwiperAutoComponent;
  let fixture: ComponentFixture<SwiperAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperAutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiperAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
