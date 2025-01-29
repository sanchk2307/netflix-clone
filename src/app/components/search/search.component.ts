import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  @Output() searchEvent = new EventEmitter<string>()

  searchActive = false;
  searchTerm = '';

  toggleSearch() {
    this.searchActive = !this.searchActive;
  }

  onSearch() {
    this.searchEvent.emit(this.searchTerm);
  }
}
