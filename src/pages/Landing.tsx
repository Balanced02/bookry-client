import React from 'react';
import './Landing.scss';
import Navbar from 'components/Navbar';
import TopSection from 'components/TopSection';
import BookCarousel from 'components/BookCarousel';
import { useTrendingBooks } from 'hooks/useTrendingBooks';

const Landing = () => {
  const trendingBooks = useTrendingBooks();
  return (
    <div className="container">
      <Navbar />
      <TopSection />
      <div className="book-carousel">
        <BookCarousel
          icon={''}
          title={'Trending Books'}
          description={'Some of the fantastic books that we have helped prepare for reading.   See All'}
          data={trendingBooks.data}
        />
        <BookCarousel
          icon={''}
          title={'Best Sellers'}
          description={'Some of the fantastic books that we have helped prepare for reading.   See All'}
          data={trendingBooks.data}
        />
        <BookCarousel
          icon={''}
          title={'Faith-Inspired fiction'}
          description={'Some of the fantastic books that we have helped prepare for reading.   See All'}
          data={trendingBooks.data}
        />
      </div>
    </div>
  );
};

export default Landing;
