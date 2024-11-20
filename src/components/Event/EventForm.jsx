import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const initialState = {
  eventTitle: "",
  category: "",
  location: "",
  startDateTime: "",
  endDateTime: "",
  description: "",
  price: null,
  image: "",
  attendeeLimit: "",
};

const EventForm = (props) => {
  const { selectedEvent, handleAddEvent, handleUpdateEvent } = props;
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const eventData = location.state?.eventData;
    if (eventData) {
      setFormData(eventData);
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedEvent) {
      handleUpdateEvent(formData, selectedEvent._id);
    } else {
      handleAddEvent(formData);
    }
    setFormData(initialState);
    navigate("/events");
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    const updatedValue =
      name === "price" || name === "attendeeLimit" ? parseFloat(value) : value;

    setFormData({ ...formData, [name]: updatedValue });
  };

  return (
    <main>
      <h1>New Event</h1>
      <div className="eventFormCard">
        <form onSubmit={handleSubmit}>
          {/* <input type="hidden" name="author_id" value={userId} /> */}
          <label htmlFor="eventTitle">Event Title:</label>
          <input
            type="text"
            id="eventTitle"
            name="eventTitle"
            value={formData.eventTitle}
            onChange={handleChange}
          />
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category.option}
            onChange={handleChange}
          >
            <option value="">Choose One</option>
            <option value="Comedy">Comedy</option>
            <option value="Crafts">Crafts</option>
            <option value="Dance">Dance</option>
            <option value="Drinks">Drinks</option>
            <option value="Games">Games</option>
            <option value="Fitness/Workouts">Fitness</option>
            <option value="Parties">Parties</option>
            <option value="Home/Garden">Home and Garden</option>
            <option value="Social Issues">Social Issues</option>
            <option value="Sports">Sports</option>
            <option value="Theater">Theater</option>
          </select>

          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />

          <label htmlFor="startDateTime">Start Date & Time:</label>
          <ReactDatePicker
            selected={formData.startDateTime}
            onChange={(date) =>
              setFormData({ ...formData, startDateTime: date })
            }
            showTimeSelect
            timeFormat="hh:mm aa"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
          />

          <label htmlFor="endDateTime">End Date & Time:</label>
          <ReactDatePicker
            selected={formData.endDateTime}
            onChange={(date) => setFormData({ ...formData, endDateTime: date })}
            showTimeSelect
            timeFormat="hh:mm aa"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            minDate={formData.startDateTime}
          />

          <label htmlFor="image">Event Image:</label>
          <input
            type="text"
            id="image"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
          />

          <label htmlFor="attendeeLimit">Attendee Limit:</label>
          <input
            type="number"
            id="attendeeLimit"
            name="attendeeLimit"
            value={formData.attendeeLimit}
            onChange={handleChange}
            min="0"
          />

          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            min="0"
          />

          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <button type="submit">
            {selectedEvent ? "Update Event" : "Submit New Event"}
          </button>
        </form>
      </div>
      <Link to={`/events`}>
        <button>Go Back</button>
      </Link>
    </main>
  );
};

export default EventForm;
