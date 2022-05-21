import React from 'react';

function LatestVideos() {
  return (
    <div className="section">
      <div className="section-header">
        <h1>Latest Videos</h1>
        <p className="subtitle text-secondary">Watch and learn, ladies</p>
      </div>
      <div className="flex justify-between mx-auto my-4">
        <div>
          <iframe
            width="664"
            height="373"
            src="https://www.youtube.com/embed/uuF9FtG76U4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="flex flex-col justify-between items-center">
          <iframe
            width="320"
            height="180"
            src="https://www.youtube.com/embed/ilzOBW-fBJU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            width="320"
            height="180"
            src="https://www.youtube.com/embed/op8E5BNeC94"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default LatestVideos;
