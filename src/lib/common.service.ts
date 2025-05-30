import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CommonService {
  selectionMap(series: any[], films: any[]) {
    return {
      series: [
        {
          title: 'Documentaries',
          data: series.filter((item) => item.genre === 'documentaries'),
        },
        {
          title: 'Comedies',
          data: series.filter((item) => item.genre === 'comedies'),
        },
        {
          title: 'Children',
          data: series.filter((item) => item.genre === 'children'),
        },
        {
          title: 'Crime',
          data: series.filter((item) => item.genre === 'crime'),
        },
        {
          title: 'Feel good',
          data: series.filter((item) => item.genre === 'feel-good'),
        },
      ],
      films: [
        {
          title: 'Drama',
          data: films.filter((item) => item.genre === 'drama'),
        },
        {
          title: 'Thriller',
          data: films.filter((item) => item.genre === 'thriller'),
        },
        {
          title: 'Children',
          data: films.filter((item) => item.genre === 'children'),
        },
        {
          title: 'Suspense',
          data: films.filter((item) => item.genre === 'suspense'),
        },
        {
          title: 'Romance',
          data: films.filter((item) => item.genre === 'romance'),
        },
      ],
    };
  }
}
