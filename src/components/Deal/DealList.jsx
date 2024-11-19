import React from 'react';
import './DealList.css';

const DealList = () => {
  const deals = [
    {
      id: 1,
      title: '25% Off Spa Day Package',
      description: 'Relax and rejuvenate with our exclusive spa deal.',
      originalPrice: '$500',
      discountedPrice: '$375',
      image: 'https://via.placeholder.com/150',
      link: '/deal/spa-package',
    },
    {
      id: 2,
      title: '30% Off Gourmet Dinner for Two',
      description: 'Enjoy a luxurious dining experience at a top-rated restaurant.',
      originalPrice: '$150',
      discountedPrice: '$105',
      image: 'https://via.placeholder.com/150',
      link: '/deal/dinner-for-two',
    },
    {
      id: 3,
      title: '70% Off Fitness Membership',
      description: 'Drop that 6 pack of beer and get that 6 pack of abs',
      originalPrice: '$300',
      discountedPrice: '$90',
      image: 'https://via.placeholder.com/150',
      link: '/deal/fitness-membership',
    },
    {
      id: 4,
      title: '40% Off Movie Tickets',
      description: 'Enhance your movie experience with this enticing bundle deal.',
      originalPrice: '$50',
      discountedPrice: '$30',
      image: 'https://via.placeholder.com/150',
      link: '/deal/movie-tickets',
    },
    {
      id: 5,
      title: '50% Off Cabin Getaway',
      description: 'Escape the city and unwind with this amazing travel deal.',
      originalPrice: '$600',
      discountedPrice: '$300',
      image: 'https://via.placeholder.com/150',
      link: '/deal/weekend-getaway',
    },
  ];

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
