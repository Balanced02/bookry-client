import React from 'react';
import './BookCard.scss';

const BookCard = (props: { img: string; title: string; rating: string; ButtonText: string }) => {
  return (
    <div className="card">
      <div className="card-body">
        <img src={props.img} />
        <h2 className="card-title">{props.title}</h2>
        <p className="rating">{props.rating}</p>
      </div>
    </div>
  );
};

export default BookCard;
