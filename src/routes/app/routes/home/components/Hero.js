import React from 'react';

const Hero = () => (
  <section className="hero text-center text-body-reverse">
    <div className="hero-bg-img" style={{backgroundImage: 'url(assets/covers/ciena-bld-2.jpg)'}}></div>
    <div className="hero-inner">
      <h1 className="hero-title text-body-reverse">About Us</h1>
      <p className="hero-lead">Everything you need to know about our company</p>
    </div>
  </section>
);

export default Hero;