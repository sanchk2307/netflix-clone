import { Component } from '@angular/core';
import { AccordionComponent } from '../../ui/accordion/accordion.component';
import { faqs } from '../../fixtures/faqs';
import { OptFormComponent } from "../opt-form/opt-form.component";

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [AccordionComponent, OptFormComponent],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss',
})
export class FaqsComponent {
  faqData = faqs;
}
