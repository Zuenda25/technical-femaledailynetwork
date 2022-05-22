import React from 'react';
import './App.css';

// Component
import AppHeader from './components/AppHeader/AppHeader';
import LatestVideos from './components/LatestVideos';
import TopBrands from './components/TopBrands/TopBrands';
import AppFooter from './components/AppFooter/AppFooter';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="App-Banners frame-970-50">Top Frame 970x50</div>
      <div className="App-Banners frame-970-250">Billboard 970x250</div>
      <LatestVideos />
      <TopBrands />
      <AppFooter />
      <div className="App-Banners frame-970-50">Bottom Frame 970x50, 468x60, 320x50</div>
    </div>
  );
}

export default App;
