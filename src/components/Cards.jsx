import React from 'react';
import Card from './Card';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';

const cards = [
  {
    id: 1,
    title: 'Gallatte web',
    image: image1,
    link: 'https://portfolio-gallardo.herokuapp.com/',
  },
  {
    id: 2,
    title: 'Gallatte GitHub',
    image: image2,
    link: 'https://github.com/gallardoMG',
  },
  {
    id: 3,
    title: 'Gallarte Linkedin',
    image: image3,
    link: 'https://www.linkedin.com/in/gallardo-front-end/',
  },
];

const Cards = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center min-vh-100'>
      <div className='row'>
        {cards.map(el => (
          <div key={el.id} className='col-md-4'>
            <Card image={el.image} title={el.title} link={el.link} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
