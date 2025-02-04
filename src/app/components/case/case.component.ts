import { Component } from '@angular/core';

@Component({
  selector: 'app-case',
  imports: [],
  templateUrl: './case.component.html',
  styleUrl: './case.component.scss'
})
export class CaseComponent {
  onButtonClick(buttonName: string) {
    console.log(`Button "${buttonName}" clicked.`);
    // Add your logic here to handle button clicks based on buttonName
  }
}
