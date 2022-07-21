import { JSXElementConstructor } from 'react';

export type MemberT = {
  id?: number;
  name: string;
  position: string;
  img: JSXElementConstructor<any>;
};
