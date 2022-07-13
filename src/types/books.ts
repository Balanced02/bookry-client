export type BookT = { id?: number, img: string; title: string; rating: string; }

export type BookCarouselT = {
  title: string,
  icon: string,
  description: string,
  data: BookT[]
}