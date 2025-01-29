import { Component, Input } from '@angular/core';
import { CardEntityComponent } from '../card-entity/card-entity.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardEntityComponent, FooterComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardComponent {
  @Input({ required: true }) slideRows!: any;
  @Input({ required: true }) category!: string;
}
