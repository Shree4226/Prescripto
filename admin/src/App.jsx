import React from 'react'
import { Login } from './pages/Login'
import { ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import { AdminConext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {

  const {aToken} = useContext(AdminConext)

  return aToken?(
    <div className='bg-[#F8F9Fd]'>
      <ToastContainer/>
      <Navbar/>
      <div className='flex items-start'>
        <Sidebar/>
      </div>
    </div>
  ):(
    <>
      <Login/>
      <ToastContainer/>
    </>
  )
}

export default App