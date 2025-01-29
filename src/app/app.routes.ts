import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { AuthRedirectGuard } from '../lib/auth-redirect.guard';
import { AuthProtectedGuard } from '../lib/auth-protected.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthRedirectGuard],
    data: { loggedInPath: '/browse' },
  },
  {
    path: 'browse',
    component: BrowseComponent,
    canActivate: [AuthProtectedGuard]
  },
  {
    path: 'signin',
    component: SigninComponent,
    canActivate: [AuthRedirectGuard],
    data: { loggedInPath: '/browse' },
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [AuthRedirectGuard],
    data: { loggedInPath: '/browse' },
  },
];
