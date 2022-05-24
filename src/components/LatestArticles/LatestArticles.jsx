/* eslint-disable react/prop-types */
import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './LatestArticles.css';

function LatestArticles(props) {
  const { articles } = props;
  return (
    <div className="section">
      <SectionTitle
        title="Latest Articles"
        subTitle="So you can make better purchase decision"
        actionMore
      />
      <div className="py-4 grid grid-cols-3 gap-x-6">
        {articles && articles.map((article) => (
          <article className="py-2 mb-8">
            <img className="article-image" src={article.image} alt={article.title} />
            <h2 className="py-4">{article.title}</h2>
            <p>
              {article.author}
              {' '}
              |
              {' '}
              <span className="article-published">{article.published_at}</span>
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default LatestArticles;
