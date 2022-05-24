/* eslint-disable react/prop-types */
import React from 'react';
import './SectionTitle.css';
import { FaAngleRight } from 'react-icons/fa';

function TopBrands(props) {
  const { title, subTitle, moreAction } = props;
  return (
    <div className="pb-2">
      <h1>{title}</h1>
      <div className="flex items-center justify-between">
        <p className="subtitle">{subTitle}</p>
        {
          moreAction && (
          <a className="see-more" href="#top">
            See more
            {' '}
            <FaAngleRight className="ml-2.5 mt-0.5" />
          </a>
          )
        }
      </div>
    </div>
  );
}

export default TopBrands;
