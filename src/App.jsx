import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/dashboard'
import Signup from './components/signup'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from '../proctedRouted';
import PublicRoute from '../PublicRoute';


const App = () => {
  return (
    <div>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path='/' element={<Signup />} />
          </Route>
         <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
         </Route>
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App