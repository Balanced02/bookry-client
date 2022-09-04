import React, { JSXElementConstructor } from 'react';
import './styles.scss';
import { MemberT } from 'types';

const MemberCard = ({ img, name, position }: MemberT) => {
  const ImageComponent: JSXElementConstructor<any> = img;
  return (
    <div className="member-card">
      <div className="img">
        <ImageComponent />
      </div>
      <p>{name}</p>
      <p>{position}</p>
    </div>
  );
};

export default MemberCard;
