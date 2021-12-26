import React from 'react';
import PropTypes from 'prop-types';
import CountdownContainer from '../Commons/CountdownContainer';
import './styles/ProductStyles.css';

function ProductCard({ product, handleDetails }) {
  const { id, title, rating, image } = product;

  return (
    <div className="product-card__wrapper">
      <img className="product-card__image" alt={`${title}`} src={`${image}`} />
      <div className="product-card__body">
        <h3>{title}</h3>
        <CountdownContainer
          count={rating.count}
          handleDetails={handleDetails}
          id={id}
        />
      </div>
    </div>
  );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        category: PropTypes.string,
        image: PropTypes.string,
        rating: PropTypes.shape({
            rate: PropTypes.number,
            count: PropTypes.number
        }),
    }).isRequired,
    handleDetails: PropTypes.func.isRequired,
};

export default ProductCard;
