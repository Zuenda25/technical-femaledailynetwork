/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './SectionTitle.css';
import { FaAngleRight } from 'react-icons/fa';

function TopBrands(props) {
  return (
    <div className="section-header">
      <h1>{props.title}</h1>
      <div className="flex items-center justify-between">
        <p className="subtitle">{props.subTitle}</p>
        <a className="see-more" href="#top">
          See more
          {' '}
          <FaAngleRight className="ml-2.5 mt-0.5" />
        </a>
      </div>
    </div>
  );
}

export default TopBrands;
