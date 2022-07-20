import React from 'react';
import './Landing.scss';
import Navbar from 'components/Navbar';
import TopSection from 'components/TopSection';
import BookCarousel from 'components/BookCarousel';
import { useTrendingBooks } from 'hooks/useTrendingBooks';
import DownloadSection from 'components/DownloadSection';
import { ReactComponent as TrendingBooksIcon } from 'assets/svg/TrendingBooksIcon.svg';

const Landing = () => {
  const trendingBooks = useTrendingBooks();
  return (
    <div className="container">
      <Navbar />
      <TopSection />
      <div className="book-carousel">
        <BookCarousel
          icon={<TrendingBooksIcon />}
          title={'Trending Books'}
          description={
            <span>
              Some of the fantastic books that we have helped prepare for reading.{' '}
              <a href="#" className="see-all">
                See All
              </a>
            </span>
          }
          books={trendingBooks.data}
        />
        <BookCarousel
          title={'Best Sellers'}
          description={
            <span>
              Some of the fantastic books that we have helped prepare for reading.{' '}
              <a href="#" className="see-all">
                See All
              </a>
            </span>
          }
          books={trendingBooks.data}
        />
        <BookCarousel
          title={'Faith-Inspired fiction'}
          description={
            <span>
              Some of the fantastic books that we have helped prepare for reading.{' '}
              <a href="#" className="see-all">
                See All
              </a>
            </span>
          }
          books={trendingBooks.data}
        />
      </div>
      <DownloadSection />
    </div>
  );
};

export default Landing;
