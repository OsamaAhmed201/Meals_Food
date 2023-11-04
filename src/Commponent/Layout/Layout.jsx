import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../SideBar/Navbar.jsx'
import { Offline, Online } from "react-detect-offline";


export default function Layout() {
  return (
    <>
      <Navbar />
      <div className='container py-5'>
        <Outlet></Outlet>
      </div>

      <div>
       
        <Offline>
          <div className='NetWork'>
          <i className='fas fa-wifi'></i> You Are Offline (surprise!)
          </div>
         
          </Offline>
      </div>
    </>
  )
}
