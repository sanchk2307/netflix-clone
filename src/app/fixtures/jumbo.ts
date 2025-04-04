export const jumboData: Jumbo[] = [
  {
    id: 1,
    title: 'Enjoy on your TV.',
    subTitle:
      'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
    image: '/images/misc/home-tv.jpg',
    alt: 'Tiger King on Netflix',
    direction: 'row',
  },
  {
    id: 2,
    title: 'Download your programmes to watch on the go.',
    subTitle: 'Save your data and watch all your favourites offline.',
    image: '/images/misc/home-mobile.jpg',
    alt: 'Watch on mobile',
    direction: 'row-reverse',
  },
  {
    id: 3,
    title: 'Watch everywhere.',
    subTitle:
      'Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.',
    image: '/images/misc/home-imac.jpg',
    alt: 'Money Heist on Netflix',
    direction: 'row',
  },
];

export interface Jumbo {
  id: number;
  title: string;
  subTitle: string;
  image: string;
  alt: string;
  direction: string;
}