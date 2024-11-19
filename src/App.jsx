import './App.css'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import NavBar from './components/Navbar/Navbar'
import LoginForm from './components/Forms/LoginForm';
import SignupForm from './components/Forms/SignupForm';
import DealList from './components/Deal/DealList';


function App() {
  const [user, setUser] = useState(null)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/deals" element={<DealList />} />
      </Routes>
    </>
  )
}

export default App
