import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Situated in the historic village of Wetherham, The Allegra is a modern restaurant and bar, right in the centre of the village. The 16th Century building stands with original features, offering a perfect balance of elegance, heritage and modernity..</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_fork flex__center">
        <img src={images.Fork} alt="about_fork" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">The first restaurant proprietor is believed to have been one A. Boulanger, a soup vendor, who opened his business in 1765. The sign above the door advertised restoratives, or restaurants, referring to the soups and broths available within.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
