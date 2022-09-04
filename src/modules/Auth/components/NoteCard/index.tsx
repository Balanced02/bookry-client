import React, { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

export interface CardDeckProps {
  icon?: ReactNode;
  description?: string;
}

const CardDeck: FC<CardDeckProps> = ({ icon, description }) => {
  const navigate = useNavigate();
  return (
    <div className="note-card-constainer">
      <a className="navbar-brand" onClick={() => navigate('/')}>
        Bookry
      </a>
      <div className="welcome-note">
        <div className="centerDiv">
          <div className="svgIcon">{icon}</div>
          <div className="head-text">
            <h4 className="welcome">Welcome to</h4>
            <h4 className="bookry">Bookry</h4>
          </div>
          <p className="text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDeck;
