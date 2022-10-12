import React, { useEffect, useState } from 'react';
import BookSidebar from 'components/BookSidebar';
import { ReactComponent as ChevronLeft } from 'assets/svg/ChevronLeft.svg';
import { ReactComponent as ChevronRight } from 'assets/svg/ChevronRight.svg';
import BookEditor from 'components/BookEditor';
import './styles.scss';
import { useBooks } from 'hooks';
import { useParams } from 'react-router';
import Head from 'components/Head';
import { useChapter } from 'hooks/useChapter';

const BookLayout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const { id } = useParams();

  const { book, addChapter, activeChapter, changeChapter, isLoading, refetch } = useBooks(id);

  const { chapter, updateTitle } = useChapter(activeChapter?._id);

  useEffect(() => {
    refetch();
  }, [chapter?.title]);

  if (isLoading) {
    return (
      <div className="loading">
        <Head title="Loading..." />
      </div>
    );
  }

  return (
    <div className="book-layout">
      <Head title={book.title} />
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
        {chapter && <BookEditor key={chapter._id} chapter={chapter} updateTitle={updateTitle} />}
      </main>
    </div>
  );
};

export default BookLayout;
