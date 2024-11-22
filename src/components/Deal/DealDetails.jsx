import { Link } from "react-router-dom";

const DealDetails = (props) => {
  const { selectedDeal } = props;
  return (
    <div className="deal-details-container">
      <div className="deal-header">
        <button>{selectedDeal.category}</button>
        <button>Author</button>
        <button>Contact</button>
      </div>

      <div className="deal-image">
        <img
          src="https://via.placeholder.com/"
          alt={selectedDeal.title}
        />
      </div>

      <div className="deal-main">
        <h1 className="deal-title">{selectedDeal.title}</h1>
        <div className="deal-info">
          <div>
            <button>Date/Time</button>
            <button>Location</button>
          </div>
          <div>
            <button>Price: ${selectedDeal.discount_price}</button>
            <button>
              RSVPs: {selectedDeal.joined_users.length}/{selectedDeal.bundle_number}
            </button>
          </div>
        </div>
        <div className="deal-description">
          <p>{selectedDeal.description}</p>
        </div>
      </div>

      <div className="deal-actions">
        <button className="deal-button">Comments</button>
        <button className="deal-button">Attending</button>
        <button className="deal-button">Not Attending</button>
        <button className="deal-button">Maybe</button>
      </div>

      <div className="deal-footer">
        <Link to={`/deals`}>
          <button>Close Details</button>
        </Link>
        <button className="deal-edit">Edit (if author)</button>
        <button className="deal-delete">Delete (if author)</button>
      </div>
    </div>
  );
};

export default DealDetails;
