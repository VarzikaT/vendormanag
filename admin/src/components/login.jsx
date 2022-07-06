import React from 'react'
import login from '../img/login.jpg';
import './Login.css';
import Logincard from '../components/Logincard';

function Login() {
  return (
    <div>
        <div className='loginPage-img'>
          <div className='loginpage-allign'>
            <div className='login-heading'>
              {/* <h1>Welcome to Our Login Page</h1> */}
            </div>
            <div className='card'>
              <Logincard/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login