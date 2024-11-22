import { Link } from "react-router-dom";

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
          <h3 className="eventTitle">{eventItem.eventTitle}</h3>
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
        <Link to={`/events/eventform`}>
          <button>Add Event</button>
        </Link>
      </div>
      {!eventList.length ? <h3>No events at the moment</h3> : <ul>{events}</ul>}
    </div>
  );
};

export default EventList;
