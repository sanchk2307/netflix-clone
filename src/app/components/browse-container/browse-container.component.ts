import { Component, inject, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../lib/auth.service';
import { SelectProfileComponent } from '../select-profile/select-profile.component';
import { LoadingComponent } from '../loading/loading.component';
import { BehaviorSubject, combineLatest, Subject, take } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { CardComponent } from '../cards/cards.component';
import { FirebaseService } from '../../../lib/firebase.service';
import { CommonService } from '../../../lib/common.service';
import Fuse from 'fuse.js'

@Component({
  selector: 'app-browse-container',
  standalone: true,
  imports: [
    SelectProfileComponent,
    LoadingComponent,
    HeaderComponent,
    CardComponent,
  ],
  templateUrl: './browse-container.component.html',
  styleUrl: './browse-container.component.scss',
})
export class BrowseContainerComponent implements OnInit {
  authService = inject(AuthService);
  firebaseService = inject(FirebaseService);
  commonService = inject(CommonService);
  user: any;
  currentCategory = 'series';
  private profileSubject = new Subject<any>();
  profileObs$ = this.profileSubject.asObservable();
  category = new BehaviorSubject<any>(this.currentCategory);
  categoryObs$ = this.category.asObservable();

  profile: any = {};
  isLoading = true;

  slides: any = {};
  slideRows = [];

  ngOnInit(): void {
    this.authService.user.pipe(take(1)).subscribe((user) => {
      this.user = user;
    });
    this.profileObs$.subscribe((profile) => {
      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    });
    combineLatest({
      series: this.firebaseService.useContent('series').pipe(take(1)), // Ensuring these are short-lived
      films: this.firebaseService.useContent('films').pipe(take(1)),
      category: this.categoryObs$,
    }).subscribe(({ series, films, category }) => {
      this.slides = this.commonService.selectionMap(series, films);
      this.slideRows = this.slides[category];
      this.currentCategory = category;
    });
  }

  clickProfile(user: any) {
    this.profileSubject.next({
      displayName: this.user.displayName,
      photoURL: this.user.photoURL,
    });
    this.profile = {
      displayName: this.user.displayName,
      photoURL: this.user.photoURL,
    };
  }

  onSearch(searchTerm: string) {
    const fuse = new Fuse(this.slideRows, {
      keys: [
        'data.description',
        'data.title',
        'data.genre'
      ]
    })
    const results = fuse.search(searchTerm).map(({ item }) => item)

    if (this.slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      this.slideRows = results
    } else {
      this.slideRows = this.slides[this.currentCategory]
    }
  }
}
