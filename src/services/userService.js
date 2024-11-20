import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;
const BASE_URL = `${BACKEND_URL}/users`;

const create = async (formData) => {
  try {
    const res = await axios.post(`${BASE_URL}/signup`, formData)
    return res.data;
  } catch (error) {
    console.log(error)
  }
}
const signin = async (formData) => {
    try {
      const res = await axios.post(`${BASE_URL}/signin`, formData)
      return res.data;
    } catch (error) {
      console.log(error)
    }
  }

const update = async (formData, userId) => {
  try {
    const res = await axios.put(`${BASE_URL}/${userId}`, formData)
    return res.data;
  } catch (error) {
    console.log(error)
  }
}

const deleteUser = async (userId) => {
  try {
    const res = await axios.delete(`${BASE_URL}/${userId}`)
    return res.data;
  } catch (error) {
    console.log(error)
  }
}

export { create, signin, update, deleteUser }