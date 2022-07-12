import React from 'react';
import './Landing.scss';
import Navbar from 'components/Navbar';
import TopSection from 'components/TopSection';
import BookCarousel from 'components/BookCarousel';
// import Book from 'assets/images/book.jpeg';

const Landing = () => {
  return (
    <div className="container">
      <Navbar />
      <TopSection />
      <div className="book-carousel">
        <BookCarousel
          img={''}
          title={'Trending Books'}
          description={'Some of the fantastic books that we have helped prapre for reading.   See All'}
        />
        <BookCarousel
          img={''}
          title={'Best Sellers'}
          description={'Some of the fantastic books that we have helped prapre for reading.   See All'}
        />
        <BookCarousel
          img={''}
          title={'Faith-Inspired fiction'}
          description={'Some of the fantastic books that we have helped prapre for reading.   See All'}
        />
      </div>
    </div>
  );
};

export default Landing;
