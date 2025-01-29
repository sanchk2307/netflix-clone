import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FirebaseService } from '../../../lib/firebase.service';

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss',
})
export class SignUpFormComponent {
  firstName = '';
  emailAddress = '';
  password = '';
  error = '';
  firebaseService = inject(FirebaseService);
  router = inject(Router);

  handleSignUp() {
    this.firebaseService
      .signUp(this.emailAddress, this.password, this.firstName)
      .then(() => this.router.navigate(['/browse']))
      .catch((error) => {
        this.emailAddress = '';
        this.password = '';
        this.error = error.message;
      });
  }
}
