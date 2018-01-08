import React from 'react'


const LoginPage = () => {
  return(
    <div className="login">
    <h1>login page</h1>
      <ul>
        <li>
         <a href="/auth/google">Login with Google</a>
        </li>
        <li>
         <a href="/auth/facebook">Login with Facebook</a>
        </li>
      </ul>
    </div>
  )
}


export default LoginPage;