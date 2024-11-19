import { Link } from "react-router-dom";

const EventDetail = (props) => {
  const { selectedEvent } = props;

  const attendeesNum = selectedEvent?.isAttending?.length;

  return (
    <div>
      <h2>{selectedEvent.eventTitle}</h2>
      <img
        src={selectedEvent.image}
        alt="Event Image"
      />
      <p>{selectedEvent.author_id}</p>
      <p>{selectedEvent.category}</p>
      <p>{selectedEvent.startDateTime}</p>
      <p>{selectedEvent.endDateTime}</p>
      <p>{selectedEvent.location}</p>
      <p>{selectedEvent.price}</p>
      <p>{selectedEvent.description}</p>
      <p>
        {attendeesNum}/{selectedEvent.attendeeLimit}
      </p>
      <button>Attending</button>
      <button>Not Attending</button>
      <button>Comments</button>
      <Link to={`/events`}>
        <button>Close Details</button>
      </Link>
    </div>
  );
};

export default EventDetail;
