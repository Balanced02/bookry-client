import React, { useMemo, useState } from 'react';
import Sidebar from 'components/Sidebar';
import { ReactComponent as ChevronLeft } from 'assets/svg/ChevronLeft.svg';
import { ReactComponent as ChevronRight } from 'assets/svg/ChevronRight.svg';
import { menuData } from './menudata';
import './styles.scss';
import { Route, Routes } from 'react-router';

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dashboard-layout">
      <Sidebar toggleSidebar={setIsOpen} isOpen={isOpen} menu={menuData} />
      <main className={isOpen ? 'sidebar-open' : ''}>
        <div className="title-container">
          <button className="icon" onClick={toggleSidebar}>
            {isOpen ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>
        <div>
          <Routes>
            {menuData.map((menu) => (
              <Route path={menu.route} key={menu.route} element={<menu.Component />} />
            ))}
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
