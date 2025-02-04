import { Component } from '@angular/core';

@Component({
  selector: 'app-vendor-service-appointments',
  imports: [],
  templateUrl: './vendor-service-appointments.component.html',
  styleUrl: './vendor-service-appointments.component.scss'
})
export class VendorServiceAppointmentsComponent {
  onButtonClick(buttonName: string) {
    console.log(`Button "${buttonName}" clicked.`);
    // Implement your button click logic here
  }
}
