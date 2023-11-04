import Style from '../Card/Card.module.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { BallTriangle } from 'react-loader-spinner'
import { Link, useParams } from 'react-router-dom'

export default function IngredientsMeals() {
  let [IngMeals, SetIngMeals] = useState([])
  let Param = useParams()

  async function getAllMealsINGR() {
    let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${Param.meals}`)
    SetIngMeals(data.meals);
  }
  useEffect(() => {
    getAllMealsINGR()
  }, [])

  return (

    <div className='row py-5 gy-3 gx-3'>
      {IngMeals.length ? IngMeals.map((mael, i) => (
        <div key={i} className='overflow-hidden col-md-4 col-sm-6 col-lg-3  '>
          <Link to={`/FoodDetails/${mael.idMeal}`}>
            <div key={mael.idMeal} className={` ${Style.card_home} ${Style.img_home} `}>
              <img src={mael.strMealThumb} alt="Meal Title" className={`w-100 `} />
              <div className={`${Style.home_con_mg} text-center`} >
                <h3>{mael.strMeal}</h3>
              </div>
            </div>
          </Link>
        </div>
      )) : <>
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

      <Helmet>

        <title>{Param.meals}</title>

      </Helmet>
    </div>
  )
}
