import React from 'react';
import './styles.scss';
import { ReactComponent as OpenBookIcon } from 'assets/svg/OpenBook.svg';

const Publish = () => {
  return (
    <section className="publish-section">
      <div className="top-book">
        <OpenBookIcon />
      </div>
      <div className="main">
        <h3 className="title">Publish a beautifuk book</h3>
        <p className="description">
          Loreum ipsum Dolor sit Amet, Connecteur adipisicing elit. Dolorenque. Loreum ipsum Loreum ipsum Dolor sit
          Amet, Connecteur adipisicing elit. Dolorenque. Loreum ipsum
        </p>
        <div className="cta">
          <form action="" method="post">
            <div className="cta-input">
              <input type="email" className="email-input" placeholder="enter your email" />
            </div>
            <div className="cta-button">
              <a className="btn" href="#">
                GET STARTED
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="bottom-book">
        <OpenBookIcon />
      </div>
    </section>
  );
};

export default Publish;
