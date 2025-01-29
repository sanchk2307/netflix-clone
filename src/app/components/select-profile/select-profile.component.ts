import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProfilesComponent } from '../profiles/profiles.component';

@Component({
  selector: 'app-select-profile',
  standalone: true,
  imports: [HeaderComponent, ProfilesComponent],
  templateUrl: './select-profile.component.html',
  styleUrl: './select-profile.component.scss',
})
export class SelectProfileComponent {
  @Input({ required: true }) user!: any;
  @Output() setProfile = new EventEmitter();

  clickProfile(user: any) {
    this.setProfile.emit(user)
  }
}
