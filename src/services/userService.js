import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;
const BASE_URL = `${BACKEND_URL}/users`;

const signup = async (formData) => {
  console.log(`test user sign in:`, formData)
  try {
    const res = await axios.post(`${BASE_URL}/signup`, formData)
    if (res.data.error) {
        throw new Error(res.data.error)
      }

    if (res.data.token) {
      localStorage.setItem('token', res.data.token)
      const user = JSON.parse(atob(res.data.token.split('.')[1]));
      return user
    }
    return res.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

const signin = async (user) => {
  console.log(`test user sign in:`, user)
    try {
      const res = await axios.post(`${BASE_URL}/signin`, user)
      if (res.data.error) {
        throw new Error(res.data.error)
      }
  
      if (res.data.token) {
        localStorage.setItem('token', res.data.token)
        const user = JSON.parse(atob(res.data.token.split('.')[1]));
        return user
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getUser = () =>  {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const user = JSON.parse(atob(token.split('.')[1]))
    return user;
  }
  
  const signout = () => {
    localStorage.removeItem('token')
  }

const update = async (formData, userId) => {
  try {
    const res = await axios.put(`${BASE_URL}/${userId}`, formData)
    return res.data;
  } catch (error) {
    throw error
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

export { signup, signin, signout, getUser, update, deleteUser }