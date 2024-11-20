import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./DealDetails.css";

const DealDetails = () => {
  const { dealId } = useParams(); 
  const [deal, setDeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDealById = async (id) => {
      try {
        setLoading(true);
        
        const deals = [
          {
            _id: "673cd3fd72d23a7e8eac0ed0",
            category: "Lifestyle",
            description: "Relax and rejuvenate with this exclusive spa deal",
            bundle_number: 25,
            joined_users: ["user1", "user2"],
            title: "25% off Spa Day Package",
            discount_price: 375,
          },
          {
            _id: "673cd2fc72d23a7e8eac0ece",
            category: "Health",
            description: "Drop that 6 pack of beer and get that 6 pack of abs",
            bundle_number: 15,
            joined_users: ["user3"],
            title: "70% off Fitness Membership",
            discount_price: 90,
          },
          {
            _id: "673cd2fc72d23a7e8eac0ecf",
            category: "Romance",
            description: "Enjoy a luxurious dining experience at a top rated resturant",
            bundle_number: 10,
            joined_users: ["user4", "user5"],
            title: "30% off Dinner for Two",
            discount_price: 105
          }
        ];
        const selectedDeal = deals.find((d) => d._id === id);
        if (!selectedDeal) {
          throw new Error("Deal not found");
        }
        setDeal(selectedDeal);
      } catch (error) {
        console.error(error.message);
        setDeal(null); 
      } finally {
        setLoading(false);
      }
    };

    fetchDealById(dealId);
  }, [dealId]);

  if (loading) {
    return <p>Loading deal details...</p>;
  }

  if (!deal) {
    return <p>Deal not found.</p>;
  }

  return (
    <div className="deal-details-container">
      <div className="deal-header">
        <button>{deal.category}</button>
        <button>Author</button>
        <button>Contact</button>
      </div>

      <div className="deal-image">
        <img
          src="https://via.placeholder.com/" 
          alt={deal.title}
        />
      </div>

      <div className="deal-main">
        <h1 className="deal-title">{deal.title}</h1>
        <div className="deal-info">
          <div>
            <button>Date/Time</button>
            <button>Location</button>
          </div>
          <div>
            <button>Price: ${deal.discount_price}</button>
            <button>
              RSVPs: {deal.joined_users.length}/{deal.bundle_number}
            </button>
          </div>
        </div>
        <div className="deal-description">
          <p>{deal.description}</p>
        </div>
      </div>

      <div className="deal-actions">
        <button className="deal-button">Comments</button>
        <button className="deal-button">Attending</button>
        <button className="deal-button">Not Attending</button>
        <button className="deal-button">Maybe</button>
      </div>

      <div className="deal-footer">
        <button className="deal-close">Close Details</button>
        <button className="deal-edit">Edit (if author)</button>
        <button className="deal-delete">Delete (if author)</button>
      </div>
    </div>
  );
};

export default DealDetails;
