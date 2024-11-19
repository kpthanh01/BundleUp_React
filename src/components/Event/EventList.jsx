const EventList = (props) => {
  const { eventList } = props;

  const events = eventList.map((eventItem) => (
    <div key={eventItem._id}>
      <h3>{eventItem.eventTitle}</h3>
      <p>{eventItem.description}</p>
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
