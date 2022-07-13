import React, { useState } from 'react';
import BookSidebar from 'components/BookSidebar';
import { ReactComponent as ChevronLeft } from 'assets/svg/ChevronLeft.svg';
import { ReactComponent as ChevronRight } from 'assets/svg/ChevronRight.svg';
import './styles.scss';

const BookLayout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="book-layout">
      <BookSidebar toggleSidebar={setIsOpen} isOpen={isOpen} />
      <main className={isOpen ? 'sidebar-open' : ''}>
        <div className="book-title">
          <button className="icon" onClick={toggleSidebar}>
            {isOpen ? <ChevronLeft /> : <ChevronRight />}
          </button>
          <h3>Book Title Here</h3>
        </div>
        <p onClick={() => setIsOpen(!isOpen)}>hey</p>
      </main>
    </div>
  );
};

export default BookLayout;
