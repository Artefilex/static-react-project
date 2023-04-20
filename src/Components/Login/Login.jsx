import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import validationSchema from "./validations";
import { useDispatch } from 'react-redux';
import { addUser } from '../../Reducer/reducer/AuthorSlice';
import "./login.css"
const Login = () => {
  const dispatch = useDispatch()
 
  

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
  useFormik({
    initialValues: {
     username: "",
     password: "",
     
    },
    onSubmit: (values) => {
      dispatch(addUser(values))
      console.log(values);
    },
    validationSchema,
  });

    return (
    <div className='Login'>
     <img src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
     <div className='Login-Item'>
     <h1>Sign İn</h1>
      <form onSubmit={handleSubmit}> 
        <label > User Name: </label>

        <input name='username' type="text"
         value={values.username }
         onChange={handleChange}
         onBlur={handleBlur}
         />
         	{errors.username && touched.username && (
					<div className="error">{errors.username}</div>
				)}
        <label> Password: </label>

        <input name='password' type="text" 
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
         />
         	{errors.password && touched.password && (
					<div className="error">{errors.password}</div>
				)}

         <button type='submit'> Login</button>
    </form>
     </div>
    </div>
  )
}

export default Login