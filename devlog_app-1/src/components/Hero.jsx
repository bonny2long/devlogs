import React from 'react';

const HeroTitle = () => (
  <>
    Bonny M.| <span className="other">F</span><span className="span-i">ull</span>
    <span className="span-d">S</span><span className="span-i">tack</span>
    <span className="other">D</span><span className="span-i">ev</span>
  </>
);

const Hero = () => (
  <div className="hero">
    <HeroTitle />
  </div>
);

export default Hero;