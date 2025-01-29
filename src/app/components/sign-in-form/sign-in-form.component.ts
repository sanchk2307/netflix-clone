import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from '../../../lib/firebase.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.scss',
})
export class SignInFormComponent {
  emailAddress = '';
  password = '';
  error = '';
  firebaseService = inject(FirebaseService);
  router = inject(Router);

  handleSignIn() {
    this.firebaseService
      .logIn(this.emailAddress, this.password)
      .then(() => this.router.navigate(['/browse']))
      .catch((error) => {
        this.emailAddress = '';
        this.password = '';
        this.error = error.message;
      });
  }
}
