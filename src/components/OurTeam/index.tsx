import React from 'react';
import './styles.scss';
import MemberCard from './MemberCard';
import { ReactComponent as Avartar } from 'assets/svg/Avartar.svg';

const OurTeam = () => {
  return (
    <div className="our-team">
      <div className="team-heading">
        <h1>Our Team</h1>
        <p>meet our team</p>
      </div>
      <div className="member-cards">
        <MemberCard name="John doe" position="CEO, Co-Founder" img={<Avartar />} />
        <MemberCard name="Matthew fiz" position="Senior developer" img={<Avartar />} />
        <MemberCard name="Benardo yesu" position="UI/UX designer" img={<Avartar />} />
        <MemberCard name="Grandoel smith" position="Product manager" img={<Avartar />} />
      </div>
    </div>
  );
};

export default OurTeam;
