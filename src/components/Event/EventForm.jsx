import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  eventTitle: "",
  category: "",
};

const EventForm = (props) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addBox(formData);
    setFormData(initialState);
    navigate("/events");
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h1>New Event</h1>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default EventForm;
