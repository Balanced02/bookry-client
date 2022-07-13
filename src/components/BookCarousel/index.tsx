import React from 'react';
import './styles.scss';
import BookCard from 'components/BookCard';
import { BookCarouselT } from 'types';

const BookCarousel = ({ icon, title, description, data }: BookCarouselT) => {
  return (
    <div className="category-body">
      <img src={icon} alt="" />
      <h1 className="category-title">{title}</h1>
      <p className="category-description">{description}</p>
      <div className="books">
        {data.map((d) => (
          <BookCard key={d.id} img={d.img} title={d.title} rating={d.rating} />
        ))}
      </div>
    </div>
  );
};

export default BookCarousel;
