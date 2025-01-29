import { Component } from '@angular/core';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
  showPlayer = false;

  closePlayer() {
    this.showPlayer = false
  }

  togglePlayer() {
    this.showPlayer = !this.showPlayer
  }
}
