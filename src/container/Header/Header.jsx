import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Fine Dining" />
      <img src={images.allegra} alt="logo" />
      <h1 className="app__header-h1">The Elegant Way to dine</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Outstanding food creations, complemented by expertly curated wines from around the world and signature cocktails featuring the best spirits the world has to offer </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;