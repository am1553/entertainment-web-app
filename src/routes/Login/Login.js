import React from 'react'
import LoginSignUp from '../../common_components/Login_SignUp/LoginSignUp'

function Login() {
  return (
    <div className='login_page'>
        <LoginSignUp 
        title = 'Login'
        button_text = 'Login to your account'
        />
    </div>
  )
}

export default Login