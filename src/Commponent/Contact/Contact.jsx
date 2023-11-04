import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Bars } from 'react-loader-spinner'
import { Helmet } from 'react-helmet'

export default function Contact() {

  const [error, seterror] = useState(null)
  const [isLoding, setisloding] = useState(false)

  async function ContactSubmit(values) {

  }


  let validateSchema = Yup.object({
    name: Yup.string().min(3, 'name minLength is 3').max(10, 'name is max 10').required('name is required'),
    email: Yup.string().email('email is invaild').required('email is required'),
    phone: Yup.string().required().matches(/^(011|010|012|015)[0-9]{8}$/, "enter valid phone"),
    age: Yup.number('enter age').required('enter age'),
    password: Yup.string().required().matches(/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{5,12}$/g, "enter vaild password"),
    rePassword: Yup.string().required().oneOf([Yup.ref("password")], "repassword not matching")
  })
  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      age: '',
      password: '',
      rePassword: '',
      phone: '',
    }, validationSchema: validateSchema,
    onSubmit: ContactSubmit
  })
  return (
    <>
      <div className='w-75 m-auto py-5 text-white'>
        <h2 className='text-center h1'>Contact Us</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className='row'>
            <div className="col-md-6">
              <label htmlFor="name">Name:</label>
              <input onBlur={formik.handleBlur} className='form-control mb-2' type="text" name='name' id='name' onChange={formik.handleChange} value={formik.values.name} />
              {formik.errors.name && formik.touched.name ? <div className='text-danger mt-2 p-2 alert-danger'>{formik.errors.name}</div> : ''}
            </div>
            <div className="col-md-6">
              <label htmlFor="email">Email:</label>
              <input onBlur={formik.handleBlur} className='form-control mb-2' type="email" name='email' id='email' onChange={formik.handleChange} value={formik.values.email} />
              {formik.errors.email && formik.touched.email ? <div className='text-danger mt-2 p-2 alert-danger'>{formik.errors.email}</div> : ''}
              {error ? <div className='text-danger mt-2 p-2 alert-danger'>{error}</div> : ''}
            </div>
            <div className="col-md-6">
              <label htmlFor="phone">Phone:</label>
              <input onBlur={formik.handleBlur} className='form-control mb-2' type="tel" name='phone' id='phone' onChange={formik.handleChange} value={formik.values.phone} />
              {formik.errors.phone && formik.touched.phone ? <div className='text-danger mt-2 p-2 alert-danger'>{formik.errors.phone}</div> : ''}
            </div>
            <div className="col-md-6">
              <label htmlFor="age">Age:</label>
              <input onBlur={formik.handleBlur} className='form-control mb-2' type="number" name='age' id='age' onChange={formik.handleChange} value={formik.values.age} />
              {formik.errors.age && formik.touched.age ? <div className='text-danger mt-2 p-2 alert-danger'>{formik.errors.age}</div> : ''}
            </div>
            <div className="col-md-6">
              <label htmlFor="password">Password:</label>
              <input onBlur={formik.handleBlur} className='form-control mb-2' type="password" name='password' id='password' onChange={formik.handleChange} value={formik.values.password} />
              {formik.errors.password && formik.touched.password ? <div className='text-danger mt-2 p-2 alert-danger'>{formik.errors.password}</div> : ''}

            </div>
            <div className="col-md-6">
              <label htmlFor="rePassword">rePassword:</label>
              <input onBlur={formik.handleBlur} className='form-control mb-2' type="password" name='rePassword' id='rePassword' onChange={formik.handleChange} value={formik.values.rePassword} />
              {formik.errors.rePassword && formik.touched.rePassword ? <div className='text-danger mt-2 p-2 alert-danger'>{formik.errors.rePassword}</div> : ''}
            </div>

          </div>






          {isLoding ? <button type='button' className='btn bg-main text-white mt-3'>
            <Bars
              height="20"
              width="40"
              color="white"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </button> : <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn btn-outline-info text-white mt-3'> Send</button>}



        </form>

      </div>

      <Helmet>

        <title>Contact</title>

      </Helmet>

    </>
  )
}
