import React from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import { BsChatRightText } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './PopularGroups.css';

import dataSource from '../../sources/data.source';

function PopularGroups() {
  return (
    <div className="section">
      <SectionTitle title="Popular Groups" subTitle="Where the beauty TALK are" moreAction />
      <div className="py-4 grid grid-cols-4 gap-x-6">
        {
          dataSource.popularGroups.map((item) => (
            <div className="card-popular-group">
              <img src={item.image} alt={item.name} />
              <h1 className="text-center mt-4">{item.name}</h1>
              <div className="flex justify-between items-center mt-8">
                <FiUser />
                <AiOutlineBars />
                <BsChatRightText />
              </div>
              <p className="text-center font-medium text-xs mt-4">{item.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default PopularGroups;
