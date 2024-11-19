const EventList = (props) => {
  const { eventList } = props;

  const events = eventList.map((event) => (
    <div
      key={event._id}
      onClick={() => updateSelected(event)}
    >
      <h3>{event.eventTitle}</h3>
      <p>{event.description}</p>
      <button>View</button>
    </div>
  ));

  return (
    <div>
      <h2>Event List</h2>
      {!eventList.length ? <h3>No events at the moment</h3> : <ul>{events}</ul>}
    </div>
  );
};

export default EventList;
