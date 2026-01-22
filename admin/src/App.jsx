import React from 'react'
import { Login } from './pages/Login'
import { ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import { AdminConext } from './context/AdminContext';

const App = () => {

  const {aToken} = useContext(AdminConext)

  return aToken?(
    <div>
      <ToastContainer/>
    </div>
  ):(
    <>
      <Login/>
      <ToastContainer/>
    </>
  )
}

export default App