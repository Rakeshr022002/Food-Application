import './menu.css';
import MenuData from './MenuData';
import FoodCard from '../Food_card/foodCard';
import FoodData from '../Food_card/FoodData';
import { useState } from 'react';
import fire from '../../Food_img/fire.jpg';
import HomeIntro from '../Home_intro/HomeIntro';

export default function Menu({ Cart }) {
  // Initialize selectedCategory to 'All'
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [Food, setFood] = useState(FoodData);

  const filteritems = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      setFood(FoodData);
    } else {
      const newitems = FoodData.filter((item) => item.category === cat);
      setFood(newitems);
    }
  };

  return (
    <>
      <HomeIntro />
      <div className="menu-overall">
        <br />
        <h2>Explore our menu</h2>
        <p className="menu-summary">
          Indulge in a culinary journey with our diverse menu, featuring a range of delicious options to satisfy any craving. From classic comfort food to international flavours, our menu has something for everyone.
        </p>
        <div className="menu-option-box">
          <div className="menu-option">
            <img
              src={fire}
              alt="All"
              className={`menu-img ${selectedCategory === 'All' ? 'active' : ''}`}
              onClick={() => filteritems('All')}
            />
            <p>All</p>
          </div>
          {MenuData.map((item) => (
            <div className="menu-option" key={item.id}>
              <img
                src={item.img}
                alt={item.category}
                className={`menu-img ${selectedCategory === item.category ? 'active' : ''}`}
                onClick={() => filteritems(item.category)}
              />
              <p>{item.category}</p>
            </div>
          ))}
        </div>
        <br />
        <hr />
        <FoodCard Food={Food} Cart={Cart} />
      </div>
    </>
  );
}
