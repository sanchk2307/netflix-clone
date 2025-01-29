import { Component} from '@angular/core';
import { BrowseContainerComponent } from '../../components/browse-container/browse-container.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [BrowseContainerComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss',
})
export class BrowseComponent {
}
