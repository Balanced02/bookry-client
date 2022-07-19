import { mockBooks } from 'mocks';
import { useEffect, useRef, useState } from 'react';
import { BookA } from 'types/api';

export const useBooks = (bookId: string) => {
  const [book, setBook] = useState<BookA>();
  const [loading, setLoading] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  const fetchBook = () => {
    setLoading(true);
    // TODO: Replace with api call
    timeout.current = setTimeout(() => {
      setLoading(false);
      setBook({
        _id: '1',
        created: new Date(),
        status: 'pending',
        title: 'Testing a dummy book',
        user: 'Jane Doe',
      });
    }, 2000);
  };

  useEffect(() => {
    fetchBook();
    return clearTimeout(timeout.current);
  });

  return { book, fetchBook, loading };
};
