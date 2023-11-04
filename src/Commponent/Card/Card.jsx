import React from 'react'
import Style from './Card.module.css'

import { useQuery } from 'react-query'
import axios from 'axios'
import { BallTriangle } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
export default function Card() {
  function getAllFood() {
    return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
  }
  let { isLoading, data } = useQuery('cardYummy', getAllFood)
  


  return (
    <>

      <div className='row  gy-3 gx-3 '>
        {data ? data.data.meals.map((mael,i) =>

          <div key={i} className='overflow-hidden col-md-4 col-sm-6 col-lg-3  '>
            <Link to={`/FoodDetails/${mael.idMeal}`}>
              <div key={mael.idMeal} className={` ${Style.card_home} ${Style.img_home} `}>
                <img src={mael.strMealThumb} alt="Meal Title" className={`w-100 ` } />
                <div className={`${Style.home_con_mg} text-center`} >
                  <h3>{mael.strMeal}</h3>
                </div>
              </div>
            </Link>
          </div>



        ) :
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
        }
      </div>

    </>
  )
}
