import React from 'react';
import { Link } from 'react-router-dom';

const DealList = (props) => {
  return (
    <div className="deal-list-container">
      <h1>Top Deals on BundleUp</h1>
      <p>Explore incredible savings on your favorite activities and services!</p>
      <Link to={`/deals/dealForm`}>
        <button>Add Deals</button>
      </Link>
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
              <Link to={`/deals/${deal._id}`}>
                <button onClick={() => props.handleDealSelect(deal)}>View</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealList;