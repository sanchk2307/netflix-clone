import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-card-entity',
  standalone: true,
  imports: [NgStyle, PlayerComponent],
  templateUrl: './card-entity.component.html',
  styleUrl: './card-entity.component.scss'
})
export class CardEntityComponent {
  @Input({ required: true }) category!: string;
  @Input({ required: true }) slideItem!: any;
  showFeature = false;
  itemFeature: any = null;

  setCardItem(item: any) {
    this.itemFeature = item;
    this.showFeature = true;
  }

  closeCard() {
    this.showFeature = false;
    this.itemFeature = null;
  }

}
