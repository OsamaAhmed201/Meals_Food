import React, { useEffect, useState } from 'react'
import Style from './Area.module.css'
import axios from 'axios'
import { BallTriangle } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
export default function Area() {
  const [area, setArea] = useState([])

  async function getArea() {
    let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    setArea(data.meals);
  }
  useEffect(() => {
    getArea()
  }, [])



  return (
    <>
      <div className='row py-5 gx-3 gy-3 text-center text-white '>
        <h2 className={`h1 text-center mb-4 ${Style.Title_Area}`}>"Country"</h2>
        {area.length ? area.map((nameArea, i) =>

          <div key={i} className=' col-md-4 col-lg-3  col-sm-6'>
            <Link className={`${Style.Link_area}`} to={`/areaMeals/${nameArea.strArea}`}>
              <i class={`fa-solid fa-house-flag ${Style.icon_Area}  d-block mb-2`}></i>

              <button className={`btn ${Style.btn_area}`}>  {nameArea.strArea} </button>
            </Link>
          </div>

        ) : <>
          <section className='d-flex justify-content-center align-items-center'>

            <BallTriangle
              height={500}
              width={100}
              radius={5}
              color="#4fa94d"
              ariaLabel="ball-triangle-loading"
              wrapperClass={{}}
              wrapperStyle=""
              visible={true}
            />

          </section>
        </>}
      </div>
      <Helmet>

        <title>Area</title>

      </Helmet>

    </>
  )
}
