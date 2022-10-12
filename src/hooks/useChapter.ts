import { useQuery } from '@tanstack/react-query';
import { FETCH_CHAPTER } from 'queries/constants';
import { BookA } from 'types/api';
import { useApi } from 'utils/useApi';

export const useChapter = (chapterId?: string) => {
  const { callApi, queryApi } = useApi();

  const { data, isLoading, isError, refetch } = useQuery(
    [`${FETCH_CHAPTER}-${chapterId}`],
    () => queryApi({ url: `/books/chapter/${chapterId}` }),
    { enabled: !!chapterId },
  );

  const chapter: BookA = data?.data?.data;

  const updateTitle = (title: string) =>
    callApi({ url: `/books/update-chapter/${chapterId}`, data: { title }, method: 'POST' }).then(refetch);

  return { chapter, isLoading, isError, updateTitle };
};
