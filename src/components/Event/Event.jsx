import "./EventList.css";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import EventList from "./EventList";
import EventDetail from "./EventDetail";
import EventForm from "./EventForm";
import * as eventService from "../../services/eventService";

function Event(props) {
  const { user } = props;
  const [eventList, setEventList] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();

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
  }, [selectedEvent]);

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

  const handleRemoveEvent = async (eventId) => {
    try {
      await eventService.deleteEvent(eventId);
      setEventList(eventList.filter((event) => event._id !== eventId));
      setSelectedEvent(null);
      navigate(`/events`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAttendEvent = async () => {
    const isAlreadyAttending = selectedEvent?.isAttending?.includes(user._id);
    if (!isAlreadyAttending) {
      const updatedEventData = {
        ...selectedEvent,
        isAttending: [...(selectedEvent?.isAttending || []), user._id],
      };

      try {
        const updatedEvent = await eventService.update(
          updatedEventData,
          selectedEvent._id
        );
        if (updatedEvent.error) {
          throw new Error(updatedEvent.error);
        }
        setSelectedEvent(updatedEvent);
      } catch (error) {
        console.error("Error updating event:", error);
      }
    } else {
      window.alert("You're already attending this event.");
    }
  };

  const handleRemoveAttendee = async () => {
    const updatedIsAttending = selectedEvent.isAttending.filter(
      (userId) => userId !== user._id
    );

    const updatedEventData = {
      ...selectedEvent,
      isAttending: updatedIsAttending,
    };

    try {
      const updatedEvent = await eventService.update(
        updatedEventData,
        selectedEvent._id
      );
      if (updatedEvent.error) {
        throw new Error(updatedEvent.error);
      }
      setSelectedEvent(updatedEvent);
    } catch (error) {
      console.error("Error updating event:", error);
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
          element={
            <EventDetail
              selectedEvent={selectedEvent}
              handleRemoveEvent={handleRemoveEvent}
              user={user}
              handleAttendEvent={handleAttendEvent}
              handleRemoveAttendee={handleRemoveAttendee}
              setSelectedEvent={setSelectedEvent}
            />
          }
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
