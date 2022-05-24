/* eslint-disable react/prop-types */
import React from 'react';
import StarRatings from 'react-star-ratings';
import SectionTitle from '../SectionTitle/SectionTitle';
import './EditorsChoice.css';

function EditorsChoice(props) {
  const { editorsChoice } = props;
  return (
    <div className="section mt-4">
      <SectionTitle title="Editor's Choice" subTitle="Curated with love" />
      <div className="py-4 grid grid-cols-5 gap-x-6">
        {editorsChoice
          && editorsChoice.map((item) => (
            <div className="card-editors-choice">
              <div className="card-editor">
                <div>
                  <img
                    className="editor-image"
                    src="/images/editor-dummy.png"
                    alt="editor"
                  />
                </div>
                <div>
                  <div className="editor-name">{item.editor}</div>
                  <div className="editor-role">{item.role}</div>
                </div>
              </div>
              <div className="card-product">
                <img
                  className="product-image"
                  src={item.product.image}
                  alt={item.product.name}
                />
                <article className="px-4 py-4">
                  <div className="flex items-center mt-4">
                    <p className="mr-2 mt-1.5 font-bold">{item.product.rating}</p>
                    <StarRatings
                      rating={item.product.rating}
                      starDimension="16px"
                      starSpacing="2px"
                      starRatedColor="#DC294F"
                    />
                  </div>
                  <h2 className="product-name">{item.product.name}</h2>
                  <p className="product-description">{item.product.description}</p>
                </article>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default EditorsChoice;
