import React from 'react';
import { MenuItem } from 'components/Sidebar';

const MyBooksPage = React.lazy(() => import('modules/Dashboard/MyBooks'));

export const menuData: Array<MenuItem> = [
  { title: 'My Books', route: 'books', Component: MyBooksPage },
  { title: 'Marketplace', route: 'marketplace', Component: MyBooksPage },
];
