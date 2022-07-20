import React, { useState } from 'react';
import BookSidebar from 'components/BookSidebar';
import { ReactComponent as ChevronLeft } from 'assets/svg/ChevronLeft.svg';
import { ReactComponent as ChevronRight } from 'assets/svg/ChevronRight.svg';
import BookEditor from 'components/BookEditor';
import './styles.scss';
import { useBooks } from 'hooks';

const BookLayout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const { book, addChapter, activeChapter, changeChapter } = useBooks('1');

  return (
    <div className="book-layout">
      <BookSidebar
        toggleSidebar={setIsOpen}
        isOpen={isOpen}
        chapters={book?.chapters}
        addChapter={addChapter}
        activeChapter={activeChapter}
        changeChapter={changeChapter}
      />
      <main className={isOpen ? 'sidebar-open' : ''}>
        <div className="book-title">
          <button className="icon" onClick={toggleSidebar}>
            {isOpen ? <ChevronLeft /> : <ChevronRight />}
          </button>
          <h3>{book?.title}</h3>
        </div>
        {activeChapter && <BookEditor key={activeChapter._id} chapter={activeChapter} />}
      </main>
    </div>
  );
};

export default BookLayout;
