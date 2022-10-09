import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChapterA } from 'types/api';
import './styles.scss';

export type MenuItem = {
  title: string;
  route: string;
  Component: React.LazyExoticComponent<() => JSX.Element>;
};

type SidebarT = {
  toggleSidebar: (val: boolean) => void;
  isOpen: boolean;
  menu?: Array<MenuItem>;
  activeChapter?: ChapterA;
};

const Sidebar = ({ toggleSidebar, isOpen, menu }: SidebarT) => {
  const activeRoute = (route: string) => window.location.pathname.split('/')[1] === route;

  const menuItems = useMemo(
    () =>
      menu?.map((m, i) => (
        <div key={m.title}>
          <Link to={`/app/${m.route}`} className={`chapter-item ${activeRoute(m.route) ? 'active' : ''}`}>
            {m.title}
          </Link>
        </div>
      )),
    [menu],
  );

  return (
    <div className={`book-sidebar ${isOpen && 'open'}`}>
      <div className="title-container">
        <h4 className="title" onClick={() => toggleSidebar(!isOpen)}>
          Bookry
        </h4>
      </div>
      <div>
        <div className="chapters">{menuItems}</div>
      </div>
    </div>
  );
};

export default Sidebar;
