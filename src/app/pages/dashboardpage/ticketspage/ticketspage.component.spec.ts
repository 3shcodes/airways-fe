import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketspageComponent } from './ticketspage.component';

describe('TicketspageComponent', () => {
  let component: TicketspageComponent;
  let fixture: ComponentFixture<TicketspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketspageComponent]
    });
    fixture = TestBed.createComponent(TicketspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
