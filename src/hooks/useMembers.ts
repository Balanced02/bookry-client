import { mockMembers } from 'mocks';
import { useEffect, useState } from 'react';
import { MemberT } from 'types';

export const useMembers = () => {
  const [data, setData] = useState<Array<MemberT>>();
  const getMembers = () => {
    setData(mockMembers);
  };

  useEffect(() => {
    getMembers();
  }, []);

  return { data, getMembers };
};
