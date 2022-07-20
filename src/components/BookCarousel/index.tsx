import React from 'react';
import './styles.scss';
import BookCard from 'components/BookCard';
import { BookCarouselT } from 'types';

const BookCarousel = ({ icon, title, description, books }: BookCarouselT) => {
  return (
    <div className="category-body">
      {icon}
      <div>
        <h1 className="category-title">{title}</h1>
        <p className="category-description">{description}</p>
        <div className="books">
          {books.map((book) => (
            <BookCard key={book.id} img={book.img} title={book.title} rating={book.rating} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCarousel;
