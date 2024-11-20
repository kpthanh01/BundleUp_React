import { Link } from "react-router-dom";

const EventList = (props) => {
  const { eventList, handleViewEvent } = props;

  const events = eventList.map((eventItem) => (
    <div key={eventItem._id}>
      <h3>{eventItem.eventTitle}</h3>
      <p>{eventItem.description}</p>
      <Link to={`/events/${eventItem._id}`}>
        <button onClick={() => handleViewEvent(eventItem)}>View</button>
      </Link>
    </div>
  ));

  return (
    <div>
      <div>
        <h2>Event List</h2>
        <button>Add Event</button>
      </div>
      {!eventList.length ? <h3>No events at the moment</h3> : <ul>{events}</ul>}
    </div>
  );
};

export default EventList;