import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Style from './Categories.module.css'
import { Link } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';
import { Helmet } from 'react-helmet';




export default function Categories() {
  let [Cate, SetCate] = useState([])

  async function getCategory() {
    let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    SetCate(data.categories);
  }

  useEffect(() => {
    getCategory()
  }, [])
  return (

    <>
      <div className='py-5'>

        <div className="row gx-3 gy-3">
          {Cate.length ? Cate.map((category) => <div key={category.idCategory} className='overflow-hidden col-md-4 col-sm-6 col-lg-3  '>
            <Link to={`/categoryMeals/${category.strCategory}`}>
              <div key={category.idCategory} className={` ${Style.card_home} ${Style.img_home} `}>
                <img src={category.strCategoryThumb} alt="Meal Title" className={`w-100 `} />
                <div className={`${Style.home_con_mg} text-center`} >
                  <p className={`${Style.home_p}`}>{category.strCategory}</p>
                </div>
              </div>
            </Link>
          </div>) : <>
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

      </div>


      <Helmet>

        <title>Categories</title>

      </Helmet>

    </>


  )
}
