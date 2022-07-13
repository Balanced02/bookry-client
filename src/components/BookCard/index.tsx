import React from 'react';
import { BookT } from 'types';
import './styles.scss';

const BookCard = ({ img, title, rating }: BookT) => {
  return (
    <div className="card">
      <div className="card-body">
        <img src={img} />
        <h2 className="card-title">{title}</h2>
        <p className="rating">{rating}</p>
      </div>
    </div>
  );
};

export default BookCard;
