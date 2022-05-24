import React from 'react';
import './MyMatches.css';
import dataSource from '../../sources/data.source';
import CardProduct from '../../components/CardProduct/CardProduct';

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
            <CardProduct product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyMatches;
