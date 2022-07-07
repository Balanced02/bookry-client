import React from 'react';
import './TopSection.scss';
// import SearchIcon from '../../assets/svg/Search.svg';
// import FilterIcon from '../../assets/svg/Filter.svg';

const TopSection = () => {
  return (
    <section className="section">
      <div className="search-bar">
        <div className="search">
          <input type="text" placeholder="Search a book, Author or review, we would find it" />
        </div>
        {/* <SearchIcon />
        <FilterIcon /> */}
        <div className="search-icon">SI</div>
        <div className="filter-icon">FI</div>
        <p>filter</p>
      </div>
      <div className="heading">
        <h1>
          <span>Great stories</span> are our passion.
        </h1>
        <p>
          Sign up FREE and become a published author in less than 5 minutes. showcase your books to over 200,000 readers
          instantly
        </p>
        <div className="buttons">
          <button>Explore our library</button>
          <button>Become an Author</button>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
