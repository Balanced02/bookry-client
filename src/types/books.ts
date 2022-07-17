import { ReactNode } from 'react';

export type BookT = { id?: number; img: string; title: string; rating: string };

export type BookCarouselT = {
  title: string;
  icon?: ReactNode;
  description: ReactNode;
  books: BookT[];
};
