import React from 'react';
import { ChapterA } from 'types/api';
import './styles.scss';

type SidebarT = {
  toggleSidebar: (val: boolean) => void;
  isOpen: boolean;
  chapters?: Array<ChapterA>;
  addChapter: () => void;
  changeChapter: (id: string) => void;
  activeChapter?: ChapterA;
};

const BookSidebar = ({ toggleSidebar, isOpen, chapters, addChapter, activeChapter, changeChapter }: SidebarT) => {
  return (
    <div className={`book-sidebar ${isOpen && 'open'}`}>
      <div className="title-container">
        <h4 className="title" onClick={() => toggleSidebar(!isOpen)}>
          Bookry
        </h4>
      </div>
      <div>
        <div className="add-title bg-light" onClick={addChapter}>
          <p>
            Add a new <span>chapter</span>
          </p>
        </div>
        <div className="chapters">
          {chapters?.map((chapter, i) => (
            <div key={chapter.title}>
              {' '}
              <button
                onClick={() => changeChapter(chapter._id)}
                className={`chapter-item ${activeChapter?._id === chapter._id ? 'active' : ''}`}
              >
                {chapter.title ? chapter.title : `Chapter ${i + 1}`}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookSidebar;
