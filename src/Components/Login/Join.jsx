
import "../../Assests/scss/login/login.css"
import { useFormik } from "formik";
import validationSchema from "./validations";
import { addUserToLocalStorage} from '../../Reducer/reducer/AuthorSlice';
import { useDispatch} from 'react-redux';
import { addUser } from '../../Reducer/reducer/AuthorSlice';
const Join = () => {
    console.log("join render")
    const dispatch = useDispatch()
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } =  
  useFormik({
    initialValues:{
        username:"",
        name:"",
        password:"",
        email:"",
    },
    onSubmit:(values, {resetForm}) =>{
        dispatch(addUser(values))
        if(!localStorage.getItem("users")?.includes(values)){
            addUserToLocalStorage(values)
        }
        resetForm()
    },
    validationSchema
  })
  

  return (
    <div className='Login'>
        <img src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <div className='Login-Item join-div'>
        <h1>Join Us</h1>
        <form onSubmit={handleSubmit} >
            <div className='input-div'>
                <label htmlFor=""> Name</label>
                <input type="text"  
                name='name'
                value={values.name} 
                 onChange={handleChange}
                  onBlur={handleBlur} />
                  <div className="errorDiv">
                  {
                    errors.name && touched.name && (
                        <div className='error'>{errors.name} </div>
                    )
                  }
                  </div>
            </div>
            <div className='input-div'>
                <label htmlFor=""> Email</label>
                <input type="mail"
                name='email' 
                value={values.email}  
                onChange={handleChange} 
                onBlur={handleBlur}  />
                <div className="errorDiv">
                    {errors.email && touched.email && (
                        <div className='error'>{errors.email}</div>
                    )}
                </div>
            </div>
            <div className='input-div'>
                <label htmlFor=""> UserName</label>
                <input type="text"
                name='username' 
                value={values.username}  
                onChange={handleChange} 
                onBlur={handleBlur}  />
                <div className="errorDiv">
                {errors.username && touched.username && (
                        <div className='error'>{errors.username}</div>
                    )}
                </div>
            </div>
            <div className='input-div'>
                <label htmlFor=""> Password</label>
                <input   
                 name="password"
                 type="password" 
                 value={values.password}  
                 onChange={handleChange} 
                 onBlur={handleBlur} />
                 <div className="errorDiv">
                 {errors.password && touched.password && (
                        <div className='error'>{errors.password}</div>
                    )}
                 </div>
            </div>
            <button type='submit'> <span>Create Acount</span> </button>
        </form>    
            
        </div>
      
    </div>
  )
}

export default  Join 