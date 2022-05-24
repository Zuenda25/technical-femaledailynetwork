/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './AppHeader.css';
import { FaBars, FaSearch, FaRegUserCircle } from 'react-icons/fa';
import dataSource from '../../sources/data.source';

function AppHeader() {
  return (
    <header>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button className="py-4 px-2" type="button"><FaBars /></button>
          <img className="app-logo" src="./images/fd-logo.png" alt="Female Daily Logo" />
        </div>
        <div className="search-bar">
          <FaSearch />
          <input className="search-input" type="text" placeholder="Search products, articles, topics, brands, etc" />
        </div>
        <button type="button" className="btn-auth">
          <FaRegUserCircle className="mr-2" />
          {' '}
          LOGIN / SIGNUP
        </button>
      </div>
      <hr />
      <div className="nav-header">
        {dataSource.topNav.map((item) => (
          <a key={item} href="#top">{item}</a>
        ))}
      </div>
      <hr />
    </header>
  );
}

export default AppHeader;
