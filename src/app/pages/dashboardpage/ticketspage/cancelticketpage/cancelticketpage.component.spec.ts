import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelticketpageComponent } from './cancelticketpage.component';

describe('CancelticketpageComponent', () => {
  let component: CancelticketpageComponent;
  let fixture: ComponentFixture<CancelticketpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelticketpageComponent]
    });
    fixture = TestBed.createComponent(CancelticketpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
