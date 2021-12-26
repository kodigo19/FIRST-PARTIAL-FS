import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoadingComponent from '../Commons/LoadingComponent';
import './styles/ProductStyles.css';
import styles from './styles/ButtonStyles.module.css';

function ProductDetailContainer() {
  const { id } = useParams();

  const [product, setProduct] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);
  return loading ? (
    <LoadingComponent />
  ) : (
    <div className="product-detail__wrapper">
        <div className="product-detail__category">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <span className="li-separator"/>
            <li>
              <strong>&gt; {product.category}</strong>
            </li>
          </ul>
        </div>
        <div className="product-detail__body">
          <div className="product-detail__image_wrapper">
            <div>
              <img src={`${product.image}`} alt={`${product.title}`} />
            </div>
            <p>
              <strong>Satisfacción garantizada</strong>
              <br />
              Para cambios o devoluciones visita{' '}
              <a href="/"> Más información</a>
            </p>
          </div>
          <div className="product-detail__info_wrapper">
            <h3 className="product-detail__info_title">{product.title} </h3>
            <div className="product-detail__rating">
                <FontAwesomeIcon className='star-icon-style' icon="star" /><span> {product.rating.count / 100} out of 5</span>
            </div>
            <hr />
            <p>{product.description}</p>
            <hr className="product-detail__info_separator" />

            <div className="product-detail__price">
              <strong>Price:</strong>
              <span> $ {product.price}</span>
            </div>
            <div className="product-detail__hero_wrapper">
              <button type="submit" className={styles.addToCartButton}>Add to Cart</button>
              <button type="submit" className={styles.buyNowButton}>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProductDetailContainer;
