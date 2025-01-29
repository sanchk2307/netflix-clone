import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { SignInFormComponent } from "../../components/sign-in-form/sign-in-form.component";

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SignInFormComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

}
