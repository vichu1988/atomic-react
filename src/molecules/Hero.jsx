import React, { PropTypes } from 'react';

import './Hero.css';

const Hero = (props) => {
  const { backgroundImg, alt, imgWidth, link } = props;

  const slide = () => {
    return (
      <img
        src={backgroundImg}
        alt={alt}
        width={`${imgWidth}%`}
        className="hero-image"
      />
    );
  };

  return (
    <div>
      {(link !== undefined) ? (
        <a href={link}>
          {slide()}
        </a>
      ) : (
        slide()
      )}
    </div>
  );
};

Hero.propTypes = {
  /**
  * Background Image
  */
  backgroundImg: PropTypes.string,
  /**
  * Image Alt Text
  */
  alt: PropTypes.string,
  /**
  * Background Image Width
  */
  imgWidth: PropTypes.number,
  /**
  * Slide Link
  */
  link: PropTypes.string
};

export default Hero;
