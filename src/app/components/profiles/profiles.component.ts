import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-profiles',
  standalone: true,
  imports: [],
  templateUrl: './profiles.component.html',
  styleUrl: './profiles.component.scss',
})
export class ProfilesComponent {
  @Input() user?: any;
  @Output() setProfile = new EventEmitter<any>();

  onClickProfile() {
    this.setProfile.emit(this.user);
  }
}
