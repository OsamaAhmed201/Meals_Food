import React, { useState } from 'react'
import Style from '../Card/Card.module.css'
import axios from 'axios';
import { useQuery } from 'react-query';
import { BallTriangle } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Home() {

  const [searchValue, setSearchValue] = useState('');

  function SearchAllFood(word) {
    return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`)
  }

  let { isLoading, data } = useQuery(['searchFood', searchValue], () => SearchAllFood(searchValue))

  return (
    <>
      <div className='py-5'>

        <div className="row ">


          <div className="col-md-6">
            <input onChange={(e) => {
              setSearchValue(e.target.value);
            }} className='form-control mb-3' type="text" placeholder='Search meal by name' name="food" id="food" />
          </div>

        </div>

        <div className="row gx-3 gy-3">
          {data && data.data && data.data.meals && data.data.meals.length > 0 ? (
            data.data.meals.map((mael, i) => (
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
            ))
          ) : isLoading ? (
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
          ) : (
            <h2 className='text-center py-5 mt-5 text-white'>Data not found</h2>
          )}
        </div>
      </div>
      <Helmet>

        <title>Meals</title>

      </Helmet>
    </>
  )
}