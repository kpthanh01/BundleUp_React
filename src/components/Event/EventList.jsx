import { Link } from "react-router-dom";
import "./EventList.css";

const EventList = (props) => {
  const { eventList, handleViewEvent } = props;

  const events = eventList.map((eventItem) => (
    <div key={eventItem._id}>
      <div className="eventListCard">
        <div className="eventListImgContainer">
          <img
            src={eventItem.image}
            alt="Event Image"
            id="eventListImg"
          />
        </div>
        <div className="eventListDetailsContainer">
          <h3>{eventItem.eventTitle}</h3>
          <p>{eventItem.description}</p>
          <Link to={`/events/${eventItem._id}`}>
            <button onClick={() => handleViewEvent(eventItem)}>View</button>
          </Link>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div>
        <h2 id="eventHeader">Event List</h2>
        <button>Add Event</button>
      </div>
      {!eventList.length ? <h3>No events at the moment</h3> : <ul>{events}</ul>}
    </div>
  );
};

export default EventList;
