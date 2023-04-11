import React from 'react'

const Login = () => {
   
    const handleSubmit = (e) =>{
      e.preventDefault()
    }

    return (
    <form onSubmit={handleSubmit}> 
        <label htmlFor="username"> User Name: </label>
        <input type="text" id='username' />
        <label htmlFor="pasword"> Pasword: </label>
        <input type="text" id='pasword' />
        <button type='submit'> Login</button>
    </form>
  )
}

export default Login