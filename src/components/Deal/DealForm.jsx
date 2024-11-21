import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DealForm.css";

const initialState = {
  dealTitle: "",
  category: "",
  description: "",
  originalPrice: "",
  discountPrice: "",
};

const DealForm = (props) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addDeal(formData); 
    setFormData(initialState);
    navigate("/deals"); 
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h1>New Deal</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="dealTitle">Deal Title:</label>
        <input
          type="text"
          id="dealTitle"
          name="dealTitle"
          value={formData.dealTitle}
          onChange={handleChange}
          required
        />

        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Choose One</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Health">Health</option>
          <option value="Fitness">Fitness</option>
          <option value="Travel">Travel</option>
          <option value="Food">Food</option>
          <option value="Entertainment">Entertainment</option>
        </select>

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          required
        />

        <label htmlFor="originalPrice">Original Price:</label>
        <input
          type="number"
          id="originalPrice"
          name="originalPrice"
          value={formData.originalPrice}
          onChange={handleChange}
          required
        />

        <label htmlFor="discountPrice">Discount Price:</label>
        <input
          type="number"
          id="discountPrice"
          name="discountPrice"
          value={formData.discountPrice}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default DealForm;
