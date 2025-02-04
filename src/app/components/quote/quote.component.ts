import { Component } from '@angular/core';

@Component({
  selector: 'app-quote',
  imports: [],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss'
})
export class QuoteComponent {
  onButtonClick(buttonName: string) {
    console.log(`Button "${buttonName}" clicked.`);
    // Implement your button click logic here
  }
}
