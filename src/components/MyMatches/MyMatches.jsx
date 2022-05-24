import React from 'react';
import StarRatings from 'react-star-ratings';
import './MyMatches.css';
import dataSource from '../../sources/data.source';

function MyMatches() {
  return (
    <div
      className="my-matches"
      style={{ backgroundImage: 'url(/images/bg-image-1.jpg)' }}
    >
      <div className="section">
        <div className="grid grid-cols-5 gap-x-6">
          <div className="col-span-2 px-4 flex flex-col justify-around ml-28 py-8 items-end">
            <h1 className="text-left">
              Looking for products that are just simply perfect for you?
            </h1>
            <p className="section-description">
              Here are some products that we believe match your skin, hair, and
              body! Have we mentioned that they solve your concern too?
            </p>
            <button className="btn-see-matches" type="button">See My Matches</button>
          </div>
          {dataSource.myMatches.map((item) => (
            <div className="card-match">
              <img src={item.image} alt={item.name} />
              <p className="item-type">{item.type}</p>
              <div className="flex items-center justify-between mt-1">
                <p className="mt-1.5 font-bold">{item.rating}</p>
                <StarRatings
                  rating={item.rating}
                  starDimension="16px"
                  starSpacing="1px"
                  starRatedColor="#DC294F"
                />
                <p className="mt-1.5">{`(${item.review_count})`}</p>
              </div>
              <h2 className="uppercase mt-2">{item.name}</h2>
              <p className="mt-1.5 font-medium">{item.description}</p>
              <p className="mt-1.5 item-note">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyMatches;
