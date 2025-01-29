import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
  isExpanded = false;

  onToggle() {
    this.isExpanded = !this.isExpanded;
  }
}
