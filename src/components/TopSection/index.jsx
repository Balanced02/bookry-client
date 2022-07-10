import React from 'react';
import './TopSection.scss';
import { ReactComponent as SearchIcon } from 'assets/svg/Search.svg';
import { ReactComponent as FilterIcon } from 'assets/svg/Filter.svg';

const TopSection = () => {
  return (
    <section className="top-section section">
      <form action="" method="post">
        <div className="search-bar">
          <div className="search-left">
            <input type="text" className="search-box" placeholder="Search a book, Author or review, we would find it" />
            <div className="search-icon">
              <a href="#">
                <SearchIcon />
              </a>
            </div>
          </div>
          <div className="search-right">
            <div className="filter-icon">
              <FilterIcon />
            </div>
            <p className="filter-text">Filter</p>
          </div>
        </div>
      </form>
      <div className="heading">
        <h2 className="great-stories">Great Stories</h2>
        <h1 className="our-passion">are our passion .</h1>
        <div className="heading-description">
          <p>
            <span className="sign-up-free">Sign up FREE </span> and become a published author in less than 5 minutes.
          </p>
          <p>showcase your books to over 200,000 readers instantly</p>
        </div>
        <div className="cta-buttons">
          <a className="btn" href="#">
            Explore our library
          </a>
          <a className="btn" href="#">
            Become an Author
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
