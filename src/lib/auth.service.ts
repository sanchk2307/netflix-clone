import { Injectable } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user = new BehaviorSubject<any | null>(this.getUserFromLocalStorage());

  constructor(private auth: Auth) {
    onAuthStateChanged(this.auth, (authUser) => {
      if (authUser) {
        this.setUser(authUser);
      } else {
        this.setUser(null);
      }
    });
  }

  get user(): Observable<any> {
    return this._user.asObservable();
  }

  setUser(user: any) {
    this._user.next(user);
    this.setUserToLocalStorage(user);
  }

  private getUserFromLocalStorage(): any | null {
    if (typeof window === 'undefined') {
      return null;
    }
    const userData = window.localStorage.getItem('authUser');
    return userData ? JSON.parse(userData) : null;
  }

  private setUserToLocalStorage(user: any): void {
    if (typeof window !== 'undefined') {
      if (user) {
        window.localStorage.setItem('authUser', JSON.stringify(user));
      } else {
        window.localStorage.removeItem('authUser');
      }
    }
  }
}
