import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import CardProduct from '../../components/CardProduct/CardProduct';

import dataSource from '../../sources/data.source';

function TrendingThisWeek() {
  return (
    <div className="section">
      <SectionTitle title="Trending This Week" subTitle="See our weekly most reviewed products" />
      <div className="py-4 grid grid-cols-6 gap-x-6">
        {
        dataSource.trendingThisWeek.map((item) => (
          <CardProduct product={item} />
        ))
      }
      </div>
    </div>
  );
}

export default TrendingThisWeek;
