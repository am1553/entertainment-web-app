import React, { useState } from 'react'
import Logo from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'
import SignUp from '../../routes/SignUp/SignUp'


function LoginSignUp(props) {

    let navigate = useNavigate()

    const [repeatPassword, setRepeatPassword] = useState(
        props.title === 'Login' ? null : 
        <input type='password' placeholder='Repeat Password'
        />)
    
    const [cardMessage, setCardMessage] = useState(
        props.title === 'Login' ? <p>Don't have an account? <span className='card_span' onClick={ ()=> navigate('/signup') }>Sign Up</span></p> :
        <p>Already have an account? <span className='card_span' onClick={ ()=> navigate('/login') }>Login</span></p> 
        )

  return (
    <div className='login_signup_component'>


        <header className='login_signup_component__header'> 
                <img src={ Logo } alt="" />
        </header>

        <div className="login_signup_component__card">

            <h1>{ props.title }</h1>

            <form action="">
                <input type="email" placeholder='Email address'/>
                <input type='password' placeholder='Password' />
                { repeatPassword }
                <button type='submit'>{ props.title === 'Login' ? 'Login to your account' : 'Create an account' }</button>
            </form>

            { cardMessage }

        </div>


    </div>
  )
}

export default LoginSignUp