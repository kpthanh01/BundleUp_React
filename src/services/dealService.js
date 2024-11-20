import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;
const BASE_URL = `${BACKEND_URL}/deals`;

const index = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    console.log("Error fetching deals:", error);
    throw error;
  }
};

const create = async (formData) => {
  try {
    const res = await axios.post(BASE_URL, formData);
    return res.data;
  } catch (error) {
    console.log("Error creating deal:", error);
    throw error;
  }
};

const update = async (formData, dealId) => {
  try {
    const res = await axios.put(`${BASE_URL}/${dealId}`, formData);
    return res.data;
  } catch (error) {
    console.log("Error updating deal:", error);
    throw error;
  }
};

const deleteDeal = async (dealId) => {
  try {
    const res = await axios.delete(`${BASE_URL}/${dealId}`);
    return res.data;
  } catch (error) {
    console.log("Error deleting deal:", error);
    throw error;
  }
};

export { index, create, update, deleteDeal };
