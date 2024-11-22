import { Link, useNavigate } from "react-router-dom";

const EventDetail = (props) => {
  const {
    selectedEvent,
    handleRemoveEvent,
    handleAttendEvent,
    user,
    handleRemoveAttendee,
    setSelectedEvent,
  } = props;
  const navigate = useNavigate();

  const handleCloseDetails = () => {
    setSelectedEvent(null);
    navigate("/events");
  };

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
        <h2 className="eventTitle">{selectedEvent.eventTitle}</h2>
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
            {selectedEvent.attendeeLimit > attendeesNum ? (
              <button onClick={() => handleAttendEvent()}>Attending</button>
            ) : (
              <button>Event Full</button>
            )}
            <button onClick={() => handleRemoveAttendee()}>
              Not Attending
            </button>
          </div>
        </div>
        <div id="closeEventDetails">
          <button onClick={() => handleCloseDetails()}>Close Details</button>
          {selectedEvent.author === user._id && (
            <>
              <button
                onClick={() =>
                  navigate(`/events/eventform`, {
                    state: { eventData: selectedEvent },
                  })
                }
              >
                Edit
              </button>
              <button onClick={() => handleRemoveEvent(selectedEvent._id)}>
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
