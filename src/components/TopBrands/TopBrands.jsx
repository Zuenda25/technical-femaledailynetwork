import React from 'react';
import './TopBrands.css';
import SectionTitle from '../SectionTitle/SectionTitle';

import dataSource from '../../sources/data.source';

function TopBrands() {
  return (
    <div className="section">
      <SectionTitle title="Top Brands" subTitle="We all know and love" moreAction />
      <div className="flex justify-between items-center py-4">
        {dataSource.brandLogo.map((item) => (
          <img key={item.name} className="brand-logo" src={item.img} alt={item.name} />
        ))}
      </div>
    </div>
  );
}

export default TopBrands;
