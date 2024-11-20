import "./EventList.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import EventList from "./EventList";
import EventDetail from "./EventDetail";
import EventForm from "./EventForm";
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

  const handleAddEvent = async (formData) => {
    try {
      const newEvent = await eventService.create(formData);
      if (newEvent.error) {
        throw new Error(newEvent.error);
      }
      setEventList([newEvent, ...eventList]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateEvent = async (formData, eventId) => {
    try {
      const updatedEvent = await eventService.update(formData, eventId);
      if (updatedEvent.error) {
        throw new Error(updatedEvent.error);
      }
      const updatedEventList = eventList.map((event) =>
        event._id !== updatedEvent._id ? event : updatedEvent
      );
      setEventList(updatedEventList);
      setSelectedEvent(updatedEvent);
    } catch (error) {
      console.log(error);
    }
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
        <Route
          path="/eventform"
          element={
            <EventForm
              selectedEvent={selectedEvent}
              handleAddEvent={handleAddEvent}
              handleUpdateEvent={handleUpdateEvent}
            />
          }
        />
      </Routes>
    </>
  );
}

export default Event;
