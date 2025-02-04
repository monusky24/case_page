import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorServiceAppointmentsComponent } from './vendor-service-appointments.component';

describe('VendorServiceAppointmentsComponent', () => {
  let component: VendorServiceAppointmentsComponent;
  let fixture: ComponentFixture<VendorServiceAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorServiceAppointmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorServiceAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
