import React from 'react'
import './Login.css';
import Logincard from '../components/LoginCard/Logincard';

function Login() {
  return (
    <div>
        <div className='loginPage-img'>
          <div className='loginpage-allign'>
            <div className='login-heading'>
              {/* <h1>Welcome to Our Login Page</h1> */}
            </div>
            <div className='login-card-container'>
              <Logincard/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login