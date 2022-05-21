import React from 'react';
import './TopBrands.css';

import dataSource from '../../sources/data.source';

function TopBrands() {
  return (
    <div className="section">
      <div className="section-header">
        <h1>Top Brands</h1>
        <p className="subtitle text-secondary">We all know and love</p>
      </div>
      <div className="flex justify-between items-center py-4">
        {dataSource.brandLogo.map((item) => (
          <img className="brand-logo" src={item.img} alt={item.name} />
        ))}
      </div>
    </div>
  );
}

export default TopBrands;
