import { Fragment, useEffect } from 'react';
import Slider from './../../components/slider/slider.component';

const sliderData = [
  {
    id: 1,
    img: '/images/hero-bottles.jpg',
    description: 'many bottles join',
  },
  {
    id: 2,
    img: '/images/hero-mony.jpg',
    description: 'money inside a bottle and the center a plant',
  },
  {
    id: 3,
    img: '/images/hero-beach.jpg',
    description: 'caja de carton apiladas',
  },
];

const Home = () => {
  return (
    <Fragment>
      <Slider slideshow={sliderData} />
      <header className="header">
        <div className="section-hero">
          <div className="section-hero-inner ">
            <h1 className="heading-primary">
              earn easy money, you just have to collect bottles and earn money
            </h1>
            <p>
              Try our new machine that helps you earn money, insert a bottle to
              start earning money, keep opportunities closer and help the
              planet, register now.
            </p>
            <a href="#" className="btn btn-hero">
              Start get money
            </a>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Home;
