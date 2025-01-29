import { Component } from '@angular/core';
import { JumbotronComponent } from '../../components/jumbotron/jumbotron.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FaqsComponent } from '../../components/faqs/faqs.component';
import { RouterOutlet } from '@angular/router';
import { jumboData } from '../../fixtures/jumbo';
import { HeaderComponent } from "../../components/header/header.component";
import { OptFormComponent } from "../../components/opt-form/opt-form.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JumbotronComponent, FooterComponent, FaqsComponent, RouterOutlet, HeaderComponent, OptFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  jumboData = jumboData;
}
