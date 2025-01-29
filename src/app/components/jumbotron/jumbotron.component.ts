import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Jumbo } from '../../fixtures/jumbo';

@Component({
  selector: 'app-jumbotron',
  standalone: true,
  imports: [NgClass],
  templateUrl: './jumbotron.component.html',
  styleUrl: './jumbotron.component.scss',
})
export class JumbotronComponent {
  @Input() jumbo!: Jumbo;
}
