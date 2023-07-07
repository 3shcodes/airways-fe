import { TestBed } from '@angular/core/testing';

import { TicketsServicesService } from './tickets-services.service';

describe('TicketsServicesService', () => {
  let service: TicketsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
