/* eslint-disable react/prop-types */
import React from 'react';
import StarRatings from 'react-star-ratings';

function CardProduct(props) {
  const { product } = props;
  return (
    <div className="card-match">
      <img src={product.image} alt={product.name} />
      {
        product.product_type && (
          <p className="item-type">{product.type}</p>
        )
      }
      <div className="flex items-center justify-between mt-1">
        <p className="mt-1.5 font-bold">{product.rating}</p>
        <StarRatings
          rating={product.rating}
          starDimension="16px"
          starSpacing="1px"
          starRatedColor="#DC294F"
        />
        <p className="mt-1.5">{`(${product.review_count})`}</p>
      </div>
      <h2 className="uppercase mt-2">{product.name}</h2>
      <p className="mt-1.5 font-medium">{product.description}</p>
      <p className="mt-1.5 item-note">{product.note}</p>
    </div>
  );
}

export default CardProduct;
