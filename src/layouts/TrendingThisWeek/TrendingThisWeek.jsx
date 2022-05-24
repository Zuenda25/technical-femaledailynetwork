import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import CardProduct from '../../components/CardProduct/CardProduct';

import dataSource from '../../sources/data.source';

const items = dataSource.trendingThisWeek.map((item) => (
  <CardProduct product={item} />
));

const responsive = {
  0: { items: 2 },
  568: { items: 4 },
  1024: { items: 6 },
};

function TrendingThisWeek() {
  return (
    <div className="section">
      <SectionTitle title="Trending This Week" subTitle="See our weekly most reviewed products" />
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="responsive"
        infinite
        disableButtonsControls
      />
    </div>
  );
}

export default TrendingThisWeek;
