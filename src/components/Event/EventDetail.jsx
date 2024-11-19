const EventDetail = (props) => {
  const { selected } = props;

  const attendeesNum = selected.isAttending.length;

  return (
    <div>
      <h2>{selected.eventTitle}</h2>
      <img
        src={selected.image}
        alt="Event Image"
      />
      <p>{selected.author_id}</p>
      <p>{selected.category}</p>
      <p>{selected.startDateTime}</p>
      <p>{selected.endDateTime}</p>
      <p>{selected.location}</p>
      <p>{selected.price}</p>
      <p>{selected.description}</p>
      <p>
        {attendeesNum}/{selected.numOfAttendees}
      </p>
      <button>Attending</button>
      <button>Not Attending</button>
      <button>Comments</button>
      <button>Close Details</button>
    </div>
  );
};

export default EventDetail;
