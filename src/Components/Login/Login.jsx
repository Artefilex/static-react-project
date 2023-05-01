import { useState } from "react";
import { useDispatch} from "react-redux";
import { addUser } from "../../Reducer/reducer/AuthorSlice";
import "../../Assests/scss/login/login.css";


const Login = () => {
 
  const [form ,setForm] = useState({
    username:"",
    password: ""
  })
  const dispatch = useDispatch();
  

  const handleChange = (e) => {
    const {name, value}= e.target;

    setForm(preveState => ({
      ...preveState,
      [name]: value
    }))
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    setForm({username:"" , password: ""})
    dispatch(addUser(form))
    window.location.reload();
   if(form.username && form.password){
    window.location.href= "http://localhost:3000" 
   }
  }


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
              value={form.username}
              onChange={handleChange}
            />
          </div>
          <div className="input-div">
            <label> Password: </label>

            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
            />
        
          </div>

          <button   type="submit"> <span>Login</span></button>
        </form>
        <div className="join-btn"> <a href="http://localhost:3000/join" > Don't have an account ? Join </a> </div>
      </div>
    </div>
  );
};

export default Login;
