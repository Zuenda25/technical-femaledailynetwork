/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

// Component
import AppHeader from './components/AppHeader/AppHeader';
import MyMatches from './components/MyMatches/MyMatches';
import LatestArticles from './components/LatestArticles/LatestArticles';
import LatestVideos from './components/LastestVideos/LatestVideos';
import TopBrands from './components/TopBrands/TopBrands';
import AppFooter from './components/AppFooter/AppFooter';

import getData from './services/api.service';

const articles = [{ name: 'a' }];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [dataEditorsChoices, setEditorsChoices] = useState([]);
  const [dataLatestreviews, setLatestreviews] = useState([]);
  const [dataLatestArticles, setLatestArticles] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const makeRequest = async () => {
      try {
        const res = await getData();
        setEditorsChoices(res["editor's choice"]);
        setLatestArticles(res['latest articles']);
        setLatestreviews(res['latest review']);
        console.log(dataLatestArticles);
        setIsLoading(false);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    makeRequest();
  }, []);

  return (
    <div className="App">
      <AppHeader />
      <div className="App-Banners frame-970-50">Top Frame 970x50</div>
      <div className="App-Banners frame-970-250">Billboard 970x250</div>
      <MyMatches />
      <div className="App-Banners frame-970-250">
        Horizontal 970x250
        <br />
        (Internal campaign only)
      </div>
      <LatestArticles articles={dataLatestArticles} />
      <LatestVideos />
      <TopBrands />
      <AppFooter />
      <div className="App-Banners frame-970-50">
        Bottom Frame 970x50, 468x60, 320x50
      </div>
    </div>
  );
}

export default App;
