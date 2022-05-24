import React, { useState, useEffect } from 'react';
import './App.css';

// Component
import AppHeader from './components/AppHeader/AppHeader';
import AppFooter from './components/AppFooter/AppFooter';

// Layouts
import EditorsChoice from './layouts/EditorChoice/EditorsChoice';
import MyMatches from './layouts/MyMatches/MyMatches';
import LatestArticles from './layouts/LatestArticles/LatestArticles';
import LatestReviews from './layouts/LatestReviews/LatestReviews';
import LatestVideos from './layouts/LastestVideos/LatestVideos';
import TrendingThisWeek from './layouts/TrendingThisWeek/TrendingThisWeek';
import TopBrands from './layouts/TopBrands/TopBrands';

import getData from './services/api.service';

function App() {
  const [isLoading, setIsLoading] = useState();
  const [dataEditorsChoices, setEditorsChoices] = useState([]);
  const [dataLatestReviews, setLatestreviews] = useState([]);
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
          <LatestReviews reviews={dataLatestReviews} />
          <LatestVideos />
          <TrendingThisWeek />
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
