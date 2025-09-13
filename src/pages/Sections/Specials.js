import React from 'react';
import './CSS/Specials.css';
import Button from '../../components/Button';
import FoodCard from '../../components/FoodCard';
import { useNavigate } from 'react-router-dom';
import pages from '../../utils/pages';

const specials = [
  {
    id: 1,
    title: 'Greek Salad',
    description: 'The Famous Greek Salad of crispy lettuce, peppers, olives and our Chicago style Feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: 'https://i.ibb.co/68c9bLv/greek-salad.jpg',
    price: '$5.99',
  },
  {
    id: 2,
    title: 'Bruchetta',
    description: 'Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image:
      'https://i.ibb.co/317GqZv/Bruchetta.png',
    price: '$9.99',
  },
  {
    id: 3,
    title: 'Lemon Dessert',
    description: 'This comes straight from Grandmas recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    image: 'https://i.ibb.co/sm6MfcH/desert.jpg',
    price: '$5.00',
  },
];

const Specials = () => {
  const navigate = useNavigate();

  const onClickMenu = () => {
    navigate(pages.get('orders').path);
  };
  return (
    <div className="specials">
      <div className="header-container">
        <h1 className="specials-title">Specials</h1>
        <Button title={'Online Menu'} onClick={onClickMenu} />
      </div>

      <div className="header-list">
        {specials.map((special) => (
          <FoodCard key={special.id} title={special.title} description={special.description} image={special.image} price={special.price} />
        ))}
      </div>
    </div>
  );
};

export default Specials;
