/* eslint-disable react/prop-types */
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import StarRatings from 'react-star-ratings';
import 'react-alice-carousel/lib/alice-carousel.css';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './LatestReviews.css';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
};

function LatestReviews(props) {
  const { reviews } = props;

  const items = reviews.map((item) => (
    <div className="card-review">
      <div className="card-review-top">
        <div className="flex items-start p-3">
          <img
            className="img-product-review"
            src={item.product.image}
            alt={item.product.name}
          />
          <div className="ml-2">
            <h2>{item.product.name}</h2>
            <p className="mt-1.5">{item.product.desc}</p>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center p-3">
          <StarRatings
            rating={item.star}
            starDimension="16px"
            starSpacing="2px"
            starRatedColor="#DC294F"
          />
          <p className="review-time">2 Hours ago</p>
        </div>
        <div className="px-3 pt-3 mb-8">
          <p>
            {item.comment}
            ...
            {' '}
            <a className="read-more" href="#top">
              Read More
            </a>
          </p>
        </div>
      </div>
      <div className="card-review-bottom">
        <img className="reviewer-image" src="/images/editor-dummy.png" alt={item.user} />
        <p className="reviewer-name">{item.user}</p>
        <p className="item-profile">{item.profile.join(', ')}</p>
      </div>
    </div>
  ));
  return (
    <div className="section">
      <SectionTitle
        title="Latest Reviews"
        subTitle="So you can make better purchase decision"
      />
      <div className="py-4 grid grid-cols-3 gap-x-6">
        <div className="col-span-2">
          <div className="grid-cols-2">
            <AliceCarousel
              mouseTracking
              items={items}
              responsive={responsive}
              controlsStrategy="responsive"
              infinite
              disableButtonsControls
            />
          </div>
        </div>
        <div>
          <div className="App-Banners frame-300-250">
            MR 2
            <br />
            300x250
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestReviews;
