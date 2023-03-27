import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade10ExperimentComponent } from './grade10-experiment.component';

describe('Grade10ExperimentComponent', () => {
  let component: Grade10ExperimentComponent;
  let fixture: ComponentFixture<Grade10ExperimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grade10ExperimentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grade10ExperimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
