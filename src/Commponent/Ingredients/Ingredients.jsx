import React, { useEffect, useState } from 'react'
import Style from './Ingredients.module.css'
import axios from 'axios'
import { BallTriangle } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

export default function Ingredients() {
  let [ingredients, setIngredients] = useState([])

  async function getIngredients() {
    let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    // Slice the first 20 ingredients
    setIngredients(data.meals.slice(0, 20));
  }

  useEffect(() => {
    getIngredients()
  }, [])

  return (
    <div className='row py-5 gy-1 gx-5 m-2 text-center '>
      {ingredients.length ? ingredients.map((ingr) => (
        <div className={`col-lg-3 col-md-4  ${Style.All_INgered} `} key={ingr.idIngredient}>
          <Link className={`${Style.Link_Ing}`} to={`/IngMeals/${ingr.strIngredient}`}>
            <i class="fa-solid fa-drumstick-bite"></i>
            <h4 className='text-white'>{ingr.strIngredient}</h4>
            <p >{ingr.strDescription ? ingr.strDescription.split(" ").slice(0, 20).join(" ") : ''}</p>
          </Link>
        </div>
      )) : (
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
      )}
      <Helmet>

        <title>Ingredients</title>

      </Helmet>
    </div>
  )
}
