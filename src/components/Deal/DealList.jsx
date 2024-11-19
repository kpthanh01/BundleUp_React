import React from 'react';
import './DealList.css';

const DealList = (props) => {

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Top Deals on BundleUp</h1>
      <p>Explore incredible savings on your favorite activities and services!</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {deals.map((deal) => (
          <div
            key={deal.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              width: '300px',
              overflow: 'hidden',
              textAlign: 'left',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img src={deal.image} alt={deal.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <div style={{ padding: '15px' }}>
              <h3>{deal.title}</h3>
              <p>{deal.description}</p>
              <p>
                <span style={{ textDecoration: 'line-through', color: '#888' }}>{deal.originalPrice}</span>{' '}
                <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>{deal.discountedPrice}</span>
              </p>
              <a
                href={deal.link}
                style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  textAlign: 'center',
                }}
              >
                View Deal
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealList;
