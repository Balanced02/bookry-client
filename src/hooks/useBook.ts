import { useEffect, useMemo, useRef, useState } from 'react';
import { BookA, ChapterA } from 'types/api';

export const useBooks = (bookId: string) => {
  const [book, setBook] = useState<BookA>();
  const [active, setActive] = useState<string>();
  const [loading, setLoading] = useState(true);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  const fetchBook = () => {
    setLoading(true);
    // TODO: Replace with api call
    timeout.current = setTimeout(() => {
      setLoading(false);
      const book: BookA = {
        _id: '1',
        created: new Date(),
        status: 'pending',
        title: 'Testing a dummy book',
        user: 'Jane Doe',
        chapters: [
          { _id: '1', title: 'Introduction oh' },
          { _id: '2', title: 'Plot Set' },
        ],
      };
      setBook(book);
      setActive(book?.chapters?.[0]._id);
    }, 200);
  };

  const addChapter = () => {
    if (book && book.chapters) {
      setBook({ ...book, chapters: [...book.chapters, { _id: book.chapters.length.toString(), title: '' }] });
    }
  };

  useEffect(() => {
    fetchBook();
    return () => clearTimeout(timeout.current);
  }, []);

  const activeChapter = useMemo<ChapterA | undefined>(() => {
    return book?.chapters?.filter((chapter) => chapter._id === active)[0];
  }, [active, book]);

  const changeChapter = (id: string) => setActive(id);

  return { book, fetchBook, loading, addChapter, activeChapter, changeChapter };
};
