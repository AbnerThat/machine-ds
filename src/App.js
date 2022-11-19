import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

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

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
