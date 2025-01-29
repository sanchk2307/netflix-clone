import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FirebaseService } from '../../../lib/firebase.service';
import { SearchComponent } from '../search/search.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, SearchComponent, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() src?: string;
  @Input() bg = true;
  @Input() isProfileSelected = false;
  @Input() user?: any;
  @Input() category?: string;
  @Output() setCategory = new EventEmitter<string>();
  @Output() searchEvent = new EventEmitter<string>();
  firebaseService = inject(FirebaseService);

  onClickSignOut() {
    this.firebaseService.logOut();
  }

  onClickCategory(category: string) {
    this.setCategory.emit(category);
  }

  onSearch(searchTerm: string) {
    this.searchEvent.emit(searchTerm)
  }
}
