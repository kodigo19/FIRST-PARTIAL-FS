import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingComponent from '../Commons/LoadingComponent';
import ProductCard from './ProductCard';
import './styles/ProductStyles.css';

function ProductContainer() {
  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  const handleDetails = (id, counter) => {
    if (counter > 0) {
      navigate(`detalle/${id}`);
    }
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return loading ? (
    <LoadingComponent />
  ) : (
    <div className="product-container__wrapper">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleDetails={handleDetails}
          />
        ))}
      </div>
  );
};

export default ProductContainer;
