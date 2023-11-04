import React, { useRef } from 'react'
import Style from './Sidebar.module.css'
import { Link, NavLink } from 'react-router-dom'
import img from '../img/ef-removebg-preview.png'
export default function Navbar() {



  return (


    <>

      <nav className="navbar navbar-expand-lg bg-body-tertiary p-0  fixed-top">
        <div className="container ">
          <Link className="navbar-brand" to="/">
            <img src={img} className='Logo ' alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} aria-current="page" to="/categories">Categories</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} aria-current="page" to="/area">Area</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} aria-current="page" to="/ingredients">Ingredients</NavLink>
              </li>

              <li className="nav-item ">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} aria-current="page" to="/contact">Contact Us</NavLink>
              </li>


            </ul>

          </div>
        </div>
      </nav>

    </>
    // <>

    //   <div  className="Sidebar d-flex align-items-start">

    //     <div  className="nav ">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className={`nav-item ${Style.p_itme} `}>
    //           <Link className={`nav-link active ${Style.p_itme} ${Style.itme_Routing}  w-100 `} aria-current="page" to="#">Search</Link>
    //         </li>
    //         <li className={`nav-item ${Style.p_itme} `}>
    //           <Link className={`nav-link active ${Style.p_itme} ${Style.itme_Routing}  w-100 `} aria-current="page" to="#">Categories</Link>
    //         </li>
    //         <li className={`nav-item ${Style.p_itme} `}>
    //           <Link className={`nav-link active ${Style.p_itme} ${Style.itme_Routing}  w-100 `} aria-current="page" to="#">Area</Link>
    //         </li>
    //         <li className={`nav-item ${Style.p_itme} `}>
    //           <Link className={`nav-link active ${Style.p_itme} ${Style.itme_Routing}  w-100 `} aria-current="page" to="#">Ingredients</Link>
    //         </li>
    //         <li className={`nav-item ${Style.p_itme} `}>
    //           <Link className={`nav-link active ${Style.p_itme} ${Style.itme_Routing}  w-100 `} aria-current="page" to="#">Contact Us</Link>
    //         </li>
    //       </ul>
    //     </div>

    //     <div className='icon_slider flex-column'>
    //       <i className="fa-solid fa-utensils text-danger"></i>
    //       <i className="fa-solid fa-bars"></i>
    //       {/* <i className="fa-solid fa-xmark"></i> */}
    //       <h6>
    //         <i className="fa-solid fa-user p-1 m_user_Slider text-danger"></i>
    //         <i className="fa-solid fa-star p-1 text-danger"></i>

    //       </h6>



    //     </div>
    //   </div>
    // </>
  )
}
