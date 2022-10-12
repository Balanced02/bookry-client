export type ChapterA = {
  _id?: string;
  title: string;
  body?: string;
};

export interface BookA {
  _id: string;
  title: string;
  status: 'published' | 'pending' | 'reviewing';
  user: string;
  sid: string;
  description?: string;
  coverImage?: string;
  chapters?: Array<ChapterA>;
  rating?: number;
  price?: number;
  created: Date;
}
