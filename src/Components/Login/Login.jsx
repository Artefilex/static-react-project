
import { useFormik } from "formik";
import validationSchema from "./validations";
import { useDispatch } from "react-redux";
import { addUser } from "../../Reducer/reducer/AuthorSlice";
import "./login.css";
const Login = () => {
  const dispatch = useDispatch();

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit: (values, {resetForm} ) => {
        dispatch(addUser(values));
        resetForm()
      },
      validationSchema,
    });
   

  return (
    <div className="Login">
      <img
        src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
      />
      <div className="Login-Item">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-div">
            <label> User Name: </label>

            <input
              name="username"
              type="text"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="errorDiv">
            {errors.username && touched.username && (
              <div className="error">{errors.username}</div>
            )}</div>
          </div>
          <div className="input-div">
            <label> Password: </label>

            <input
              name="password"
              type="text"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
           <div className="errorDiv">
           {errors.password && touched.password && (
              <div className="error">{errors.password}</div>
            )}
           </div>
          </div>

          <button type="submit"> <span>Login</span></button>
        </form>
        <div className="join-btn"> <a href="http://localhost:3000/join" > Don't have an account ? Join </a> </div>
      </div>
    </div>
  );
};

export default Login;


// en son join kısmını tasarladık local storage içerisine userlarımızı attık 
// bir sonraki aşama userları mapleyip eğer eşleşen varsa login yapılmışsa eşitleme yapacagız 
// daha sonra bu eşitleme varsa user için shop kısmını göstereceğiz yoksa joine göndereceğiz 
// eğer login olursa da kullanıcı kısmına ceviricezx log in buttonunu 