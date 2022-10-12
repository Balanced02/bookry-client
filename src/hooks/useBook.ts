import { useQuery } from '@tanstack/react-query';
import { FETCH_BOOK } from 'queries/constants';
import { useMemo, useState } from 'react';
import { BookA, ChapterA } from 'types/api';
import { useApi } from 'utils/useApi';

export const useBooks = (bookId?: string) => {
  const [active, setActive] = useState<string>();
  const { callApi, queryApi } = useApi();

  const { data, isLoading, isError, refetch } = useQuery(
    [`${FETCH_BOOK}-${bookId}`],
    () => queryApi({ url: `/books/${bookId}` }),
    { enabled: !!bookId },
  );

  const book: BookA = data?.data?.data;

  const addChapter = () => {
    callApi({ url: `/books/create-chapter/${book.sid}`, method: 'POST' }).then(refetch);
  };

  const activeChapter = useMemo<ChapterA | undefined>(() => {
    return book?.chapters?.filter((chapter) => chapter._id === active)[0];
  }, [active, book]);

  const createBook = (data: { title: string; coverImage?: string }) =>
    callApi({ url: '/books/create-book', data, method: 'POST' });

  const changeChapter = (id: string) => setActive(id);

  return { book, addChapter, activeChapter, changeChapter, createBook, isLoading, isError, refetch };
};
