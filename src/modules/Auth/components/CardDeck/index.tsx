import React, { FC } from 'react';
import './styles.scss';

export interface CardDeckProps {
  children?: React.ReactNode;
}

const CardDeck: FC<CardDeckProps> = ({ children }) => {
  return (
    <div className="deck-constainer">
      <div className="signup-card1">
        <div className="signup-card2">
          <div className="signup-card3">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default CardDeck;
