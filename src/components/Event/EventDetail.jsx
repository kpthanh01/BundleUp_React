import { Link, useNavigate } from "react-router-dom";

const EventDetail = (props) => {
  const { selectedEvent } = props;
  const navigate = useNavigate();

  const attendeesNum = selectedEvent?.isAttending?.length;

  const startDateStr = selectedEvent.startDateTime;
  const startDateObj = new Date(startDateStr);
  const startDate = startDateObj.toLocaleDateString("en-US");
  const startTime = startDateObj.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  });

  const endDateStr = selectedEvent.endDateTime;
  const endDateObj = new Date(endDateStr);
  const endDate = endDateObj.toLocaleDateString("en-US");
  const endTime = endDateObj.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="eventDetailCard">
      <div className="eventDetailCardInfo">
        <div className="eventCategoryAuthor">
          <div>
            <p id="category">{selectedEvent.category}</p>
          </div>
          <div>
            <p id="author">{selectedEvent.author_id}</p>
          </div>
        </div>
        <div className="eventDetailImage">
          <img
            src={selectedEvent.image}
            alt="Event Image"
            id="eventDetailImage"
          />
        </div>
        <h2>{selectedEvent.eventTitle}</h2>
        <div className="eventDetails">
          <div>
            <p>
              Start: {startDate} {startTime}
            </p>
            <p>
              End: {endDate} {endTime}
            </p>
            <p>{selectedEvent.location}</p>
          </div>
          <div>
            <p>
              Price: {selectedEvent.price ? `$${selectedEvent.price}` : "Free"}
            </p>
            <p>Number of Attendees: {attendeesNum}</p>
            <p>Attendee Limit: {selectedEvent.attendeeLimit}</p>
          </div>
        </div>
        <p id="description">{selectedEvent.description}</p>

        <div className="eventDetailButtons">
          <div>
            <button>Comments</button>
          </div>
          <div>
            <button>Attending</button>
            <button>Not Attending</button>
          </div>
        </div>
        <div id="closeEventDetails">
          <Link to={`/events`}>
            <button>Close Details</button>
          </Link>
          <button
            onClick={() =>
              navigate(`/events/eventform`, {
                state: { eventData: selectedEvent },
              })
            }
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
