import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DragDropModule, CdkDragDrop } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-call-center',
  imports: [CommonModule, DragDropModule, RouterModule],
  templateUrl: './call-center.component.html',
  styleUrl: './call-center.component.scss'
})
export class CallCenterComponent {

  constructor(private router: Router) {}

  // Method to navigate based on dropdown selection
  navigate(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    if (selectedValue) {
      this.router.navigate([`/call-center/${selectedValue}`]);
    }
  }





  // pages = ['Case', 'Opportunity'];

  // constructor(private router: Router) {}


  // drop(event: CdkDragDrop<string[]>) {
  //   const [removed] = this.pages.splice(event.previousIndex, 1);
  //   this.pages.splice(event.currentIndex, 0, removed);
  // }

  // navigateToPage(page: string) {
  //   console.log(`Navigating to: ${page}`);
  // }
}
