import React from 'react';
import './AppFooter.css';
import dataSource from '../../sources/data.source';

function AppFooter() {
  return (
    <footer>
      <div className="section">
        <h1>
          Female Daliy - Find everything you want to know about beauty on Female
          Daily
        </h1>
        <p className="subtitle">
          Product reviews, Tips & Trick, Expert and Consumer Opinions, Beauty
          Tutorials, Discussions, Beauty Workshops, anything!
          <br />
          We are here to be your friendly solutions to all things beauty, inside
          and out!
        </p>
      </div>
      <hr className="mt-12 mb-8" />
      <div className="grid grid-cols-4 px-12">
        <div>
          <ul>
            {dataSource.bottomNav[0].map((item) => (
              <li>
                <a href="#top">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {dataSource.bottomNav[1].map((item) => (
              <li>
                <a href="#top">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {dataSource.bottomNav[2].map((item) => (
              <li>
                <a href="#top">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="app-footer">
          <p>Download Our Mobile App</p>
          <div className="app-link">
            {dataSource.appLink.map((item) => (
              <a className={item.name} href={item.target}>
                <img
                  className="app-link-image"
                  src={item.image}
                  alt={item.name}
                />
              </a>
            ))}
          </div>
        </div>
        <div className="col-span-3 copyright-footer">
          <img className="footer-logo" src="./images/fd-logo.png" alt="Logo" />
          <p>
            Copyright &copy; 2015-2017 Female Daily Network &bull; All rights
            reserved
          </p>
        </div>
        <div className="social-footer">
          {dataSource.socialLink.map((item) => (
            <a className="mr-2" href={item.target}>
              <img className="social-icon" src={item.icon} alt={item.name} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;
