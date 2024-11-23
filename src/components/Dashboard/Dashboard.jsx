import { AuthedUserContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import * as eventService from "../../services/eventService";

const Dashboard = ({ userData }) => {
  const user = useContext(AuthedUserContext);
  const [joinedEventsList, setJoinedEventsList] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const events = await eventService.index();
        if (events.error) {
          throw new Error(events.error);
        }
        setJoinedEventsList(events);
      } catch (error) {
        console.log(error);
      }
    };
    getEvents();
  }, []);

  const filteredJoinedEvents = joinedEventsList.filter((eventItem) => {
    let userEvents = { ...userData };
    const attendingEvents = userEvents.joinedEvents;
    return attendingEvents.includes(eventItem._id);
  });

  const events = filteredJoinedEvents.map((eventItem) => (
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
        </div>
      </div>
    </div>
  ));

  return (
    <main>
      <h1>Welcome, {user.username}</h1>
      <p>Start to BundleUp!</p>

      <h3>Joined Events</h3>

      {!filteredJoinedEvents.length ? (
        <h3>No events at the moment</h3>
      ) : (
        <ul>{events}</ul>
      )}
    </main>
  );
};

export default Dashboard;
