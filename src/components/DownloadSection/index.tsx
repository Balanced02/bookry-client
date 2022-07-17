import React from 'react';
import './styles.scss';
import { ReactComponent as GooglePlay } from 'assets/svg/GooglePlay.svg';
import { ReactComponent as AppleStore } from 'assets/svg/AppleStore.svg';

const DownloadSection = () => {
  return (
    <div className="download-section">
      <h1 className="download-heading">Download App for Exiciting deals</h1>
      <div className="download-text">
        <p>Loreum ipsum Dolor sit Amet, Connecteur</p>
        <p>adipisicing elit. Dolorenque. Loreum ipsum</p>
      </div>
      <div className="download-buttons">
        <a className="btn" href="#">
          <GooglePlay />
          <p>Google Play</p>
        </a>
        <a className="btn" href="#">
          <AppleStore />
          <p>App Store</p>
        </a>
      </div>
    </div>
  );
};

export default DownloadSection;
