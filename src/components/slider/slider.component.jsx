import { useEffect } from 'react';
import './slider.style.css';

const initSlicer = () => {
  const listSliders = document.querySelectorAll('.slide');
  const totalSliders = listSliders.length - 1;
  let currentSlide = 0;

  const setNewPositions = () =>
    listSliders.forEach(
      (el, i) =>
        (el.style.transform = `translateX(${100 * (i - currentSlide)}%)`)
    );

  setInterval(() => {
    currentSlide === totalSliders ? (currentSlide = 0) : currentSlide++;

    setNewPositions();
  }, 6000);

  listSliders.forEach((el, i) => {
    el.style.transform = `translateX(${i * 100}%)`;
  });
};

const Slider = ({ slideshow }) => {
  useEffect(() => {
    initSlicer();
  }, []);

  return (
    <div>
      {slideshow.map(el => (
        <div key={el.id} className="slide">
          <img src={el.img} alt={el.description} />
        </div>
      ))}
    </div>
  );
};

export default Slider;
