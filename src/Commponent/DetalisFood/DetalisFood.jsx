import axios from 'axios';
import React, { useState } from 'react'
import { BallTriangle } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom'
import Style from './Detalis.module.css'
import { Helmet } from 'react-helmet';

export default function DetalisFood() {



    let { id } = useParams()
    function getFoodDetalis(id) {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    }

    let { isLoading, data } = useQuery('Fooddelalies', () => getFoodDetalis(id))


    return (<>
        {data?.data.meals[0] ? <div className='row py-5'>
            <div className='col-md-4 '>
                <img src={data?.data.meals[0].strMealThumb} className={`${Style.img_detalis} w-100`} alt="" />
                <h3 className='mt-4 text-white '>{data?.data.meals[0].strMeal}</h3>
                <Helmet>
                    
                    <title>{data?.data.meals[0].strMeal}</title>
                  
                </Helmet>
                <Link className='text-center' to={'/'}>

                    <button className={`${Style.btn_detalise} btn btn-detalise w-100 text-center m-auto  mt-2`}>Back to Home</button>
                </Link>
            </div>

            <div className='col-md-8 text-white'>
                <h4>Instruction</h4>
                <p>{data?.data.meals[0].strInstructions ? data?.data.meals[0].strInstructions.split(" ").slice(0, 100).join(" ") : ''}</p>
                <h5>Area : <span className='text-danger'>{data?.data.meals[0].strArea}</span></h5>
                <h5>Category : <span className='text-danger'>{data?.data.meals[0].strCategory}</span> </h5>
                <h5>Recipes :
                    <h6 className={`${Style.Recipes} `}>{data?.data.meals[0].strIngredient1}</h6>
                    <h6 className={`${Style.Recipes}`}>{data?.data.meals[0].strIngredient2}</h6>
                    <h6 className={`${Style.Recipes}`}>{data?.data.meals[0].strIngredient3}</h6>
                    <h6 className={`${Style.Recipes}`}>{data?.data.meals[0].strIngredient4}</h6>
                    <br />
                    <h6 className={`${Style.Recipes} `}>{data?.data.meals[0].strIngredient5}</h6>
                    <h6 className={`${Style.Recipes} `}>{data?.data.meals[0].strIngredient6}</h6>
                    <h6 className={`${Style.Recipes}`}>{data?.data.meals[0].strIngredient7}</h6>
                    <h6 className={`${Style.Recipes}`}>{data?.data.meals[0].strIngredient8}</h6>
                    <h6 className={`${Style.Recipes}`}>{data?.data.meals[0].strIngredient9}</h6>
                    <h6 className={`${Style.Recipes}`}>{data?.data.meals[0].strIngredient10}</h6>
                </h5>




                <h5>Tag : <span className='text-danger'>{data?.data.meals[0].strTags}</span></h5>
                <button className={`${Style.btn_sourc}`}>
                    <a href={data?.data.meals[0].strSource}>
                        <i className={`${Style.sourc_Icon}  fa-solid fa-code`} ></i>
                    </a>
                </button>

                <button className={`${Style.btn_yuotube} `}>
                    <a href={data?.data.meals[0].strYoutube}>
                        <i className={`${Style.youtube_Icon} fa-brands fa-youtube `}> </i>
                    </a>
                </button>



            </div>
        </div> : <>
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

    </>


    )
}
