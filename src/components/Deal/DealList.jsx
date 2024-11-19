import React from 'react';
import './DealList.css';

const DealList = (props) => {
  return (
    <div className="deal-list-container">
      <h1>Top Deals on BundleUp</h1>
      <p>Explore incredible savings on your favorite activities and services!</p>
      <div className="deal-list">
        {props.dealList.map((deal) => (
          <div key={deal.id} className="deal-item">
            <img src={deal.image} alt={deal.title} className="deal-image" />
            <div className="deal-content">
              <h3>{deal.title}</h3>
              <p>{deal.description}</p>
              <p>
                <span className="original-price">{deal.originalPrice}</span>{' '}
                <span className="discounted-price">{deal.discountedPrice}</span>
              </p>
              <a href={deal.link} className="deal-link">Buy Now</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealList;