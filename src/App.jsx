/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './App.css';

// Component
import AppHeader from './components/AppHeader/AppHeader';
import EditorsChoice from './components/EditorChoice/EditorsChoice';
import MyMatches from './components/MyMatches/MyMatches';
import LatestArticles from './components/LatestArticles/LatestArticles';
import LatestVideos from './components/LastestVideos/LatestVideos';
import TopBrands from './components/TopBrands/TopBrands';
import AppFooter from './components/AppFooter/AppFooter';

import getData from './services/api.service';

const articles = [{ name: 'a' }];

function App() {
  const [isLoading, setIsLoading] = useState();
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
      {!isLoading && (
        <div>
          <AppHeader />
          <div className="py-4">
            <div className="App-Banners frame-970-50">Top Frame 970x50</div>
          </div>
          <div className="py-4">
            <div className="App-Banners frame-970-250">Billboard 970x250</div>
          </div>
          <EditorsChoice editorsChoice={dataEditorsChoices} />
          <MyMatches />
          <div className="py-4">
            <div className="App-Banners frame-970-250">
              Horizontal 970x250
              <br />
              (Internal campaign only)
            </div>
          </div>
          <LatestArticles articles={dataLatestArticles} />
          <LatestVideos />
          <TopBrands />
          <AppFooter />
          <div className="py-4 mb-4">
            <div className="App-Banners frame-970-50">
              Bottom Frame 970x50, 468x60, 320x50
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
