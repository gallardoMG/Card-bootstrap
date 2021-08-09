import React from 'react';
import './Card.css';

const Card = ({ image, title, link }) => {
  return (
    <div className='card text-center bg-dark'>
      <div className='overflow'>
        <img src={image} alt='' className='card-img-top' />
      </div>
      <div className='card-body text-light'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text text-secondary'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, iste
          ipsam fuga quisquam aut officiis corrupti. Molestiae magni accusantium
          debitis provident! Sit eius autem cumque accusamus aspernatur
          cupiditate, nisi quisquam.
        </p>
        <a
          href={link}
          className='btn btn-outline-secondary rounded-0'
          target='_blank'
          rel='noreferrer'
        >
          Go to this website
        </a>
      </div>
    </div>
  );
};

export default Card;
