import React from 'react';
import { Card } from 'react-bootstrap';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';

const Products = ({ product }) => {
  return (
    <Card className=' p-3 rounded h-100'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top'></Card.Img>
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

Products.defaultProps = {
  products: {},
};
Products.propTypes = {
  products: propTypes.object,
};

export default Products;
