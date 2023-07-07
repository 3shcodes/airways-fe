import { TestBed } from '@angular/core/testing';

import { FlightServicesService } from './flight-services.service';

describe('FlightServicesService', () => {
  let service: FlightServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
