import React from 'react';
import './BookCarousel.scss';
import Book from 'assets/images/book.jpeg';
import BookCard from 'components/BookCard';

const BookCarousel = (props: { img: string; title: string; description: string }) => {
  return (
    <div className="category-body">
      <img src={props.img} alt="" />
      <h1 className="category-title">{props.title}</h1>
      <p className="category-description">{props.description}</p>
      <div className="books">
        <BookCard img={Book} title={'William Shakespares'} rating={'*****'} ButtonText={'button'} />
        <BookCard img={Book} title={'William Shakespares'} rating={'*****'} ButtonText={'button'} />
        <BookCard img={Book} title={'William Shakespares'} rating={'*****'} ButtonText={'button'} />
        <BookCard img={Book} title={'William Shakespares'} rating={'*****'} ButtonText={'button'} />
      </div>
    </div>
  );
};

export default BookCarousel;
