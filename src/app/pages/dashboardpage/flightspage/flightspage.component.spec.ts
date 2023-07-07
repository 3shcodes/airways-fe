import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightspageComponent } from './flightspage.component';

describe('FlightspageComponent', () => {
  let component: FlightspageComponent;
  let fixture: ComponentFixture<FlightspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightspageComponent]
    });
    fixture = TestBed.createComponent(FlightspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
