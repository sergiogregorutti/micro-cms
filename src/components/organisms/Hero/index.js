import React from 'react';
import HeroTitle from '../../atoms/HeroTitle';
import HeroDescription from '../../atoms/HeroDescription';

import './styles.scss';

function Hero() {
  const heroStyle = {
    backgroundImage: 'url(https://via.placeholder.com/1600x300)'
  };

  return (
    <div className="hero" style={heroStyle}>
      <div className="hero-text">
        <HeroTitle title="Welcome to Micro-CMS" />
        <HeroDescription description="This is a simple CMS system using local storage" />
      </div>
    </div>
  )
}

export default Hero;
