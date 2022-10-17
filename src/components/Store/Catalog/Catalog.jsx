import { useEffect, useState } from 'react';
import Product from '../Product/Product';

import './Catalog.css';

const Catalog = ({
  shoppingCart,
  setShoppingCart,
  wishlistCart,
  setWishlistCart,
  notifyToast,
  dispatch,
}) => {
  const [products, setSaveProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:3001/products');
      const data = await response.json();
      setSaveProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="catalog__container">
      {products.map(({ id, title, price, image }) => {
        return (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            image={image}
            shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
            wishlistCart={wishlistCart}
            setWishlistCart={setWishlistCart}
            notifyToast={notifyToast}
            dispatch={dispatch}
          />
        );
      })}
    </div>
  );
};

export default Catalog;
