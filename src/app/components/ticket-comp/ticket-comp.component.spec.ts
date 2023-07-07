import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCompComponent } from './ticket-comp.component';

describe('TicketCompComponent', () => {
  let component: TicketCompComponent;
  let fixture: ComponentFixture<TicketCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketCompComponent]
    });
    fixture = TestBed.createComponent(TicketCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
