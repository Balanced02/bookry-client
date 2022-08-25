import React from 'react';
import './styles.scss';
import MemberCard from './MemberCard';
import { useMembers } from 'hooks/useMembers';

const OurTeam = () => {
  const { data } = useMembers();
  return (
    <div className="our-team">
      <div className="team-heading">
        <h1>Our Team</h1>
        <p>meet our team</p>
      </div>
      <div className="member-cards">
        {data?.map((member) => (
          <MemberCard key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
