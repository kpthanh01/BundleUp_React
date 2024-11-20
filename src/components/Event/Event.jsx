import "./EventList.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import EventList from "./EventList";
import EventDetail from "./EventDetail";
import * as eventService from "../../services/eventService";

function Event() {
  const [user, setUser] = useState(null);
  const [eventList, setEventList] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const events = await eventService.index();
        if (events.error) {
          throw new Error(events.error);
        }
        setEventList(events);
      } catch (error) {
        console.log(error);
      }
    };
    getEvents();
  }, []);

  const handleViewEvent = (eventItem) => {
    setSelectedEvent(eventItem);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <EventList
              eventList={eventList}
              handleViewEvent={handleViewEvent}
            />
          }
        />
        <Route
          path="/:eventId"
          element={<EventDetail selectedEvent={selectedEvent} />}
        />
      </Routes>
    </>
  );
}

export default Event;
