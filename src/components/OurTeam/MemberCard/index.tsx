import React from 'react';
import './styles.scss';
import { TeamT } from 'types';

const MemberCard = ({ img, name, position }: TeamT) => {
  return (
    <div className="member-card">
      <div className="img">{img}</div>
      <p>{name}</p>
      <p>{position}</p>
    </div>
  );
};

export default MemberCard;
