import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/Navbar";
import LoginForm from "./components/Forms/LoginForm";
import SignupForm from "./components/Forms/SignupForm";
import EventList from "./components/Event/EventList";
import EventDetail from "./components/Event/EventDetail";
import * as eventService from "./services/eventService";

function App() {
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
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/login"
          element={<LoginForm />}
        />
        <Route
          path="/signup"
          element={<SignupForm />}
        />
        <Route
          path="/events"
          element={
            <EventList
              eventList={eventList}
              handleViewEvent={handleViewEvent}
            />
          }
        />
        <Route
          path="/events/:eventId"
          element={<EventDetail selectedEvent={selectedEvent} />}
        />
      </Routes>
    </>
  );
}

export default App;
