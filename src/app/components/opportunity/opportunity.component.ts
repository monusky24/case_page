import { Component } from '@angular/core';

@Component({
  selector: 'app-opportunity',
  imports: [],
  templateUrl: './opportunity.component.html',
  styleUrl: './opportunity.component.scss'
})
export class OpportunityComponent {
  onButtonClick(buttonName: string) {
    console.log(`Button "${buttonName}" clicked.`);
    // Implement button click logic here
  }
}
