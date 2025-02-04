import { Component } from '@angular/core';

@Component({
  selector: 'app-service-appointments',
  imports: [],
  templateUrl: './service-appointments.component.html',
  styleUrl: './service-appointments.component.scss'
})
export class ServiceAppointmentsComponent {
  onButtonClick(buttonName: string) {
    console.log(`Button "${buttonName}" clicked.`);
    // Implement your button click logic here
  }
}
