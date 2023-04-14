import React from 'react'
import { useFormik } from 'formik'
import validationSchema from "./validations";
const Login = () => {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
  useFormik({
    initialValues: {
     username: "",
     password: "",
     
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });

    return (
    <div>
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
  )
}

export default Login