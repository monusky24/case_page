import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAppointmentsComponent } from './service-appointments.component';

describe('ServiceAppointmentsComponent', () => {
  let component: ServiceAppointmentsComponent;
  let fixture: ComponentFixture<ServiceAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceAppointmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
