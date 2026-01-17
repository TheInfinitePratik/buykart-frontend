import React, { useState } from 'react'
import './CSS/Loginsignup.css'

function Loginsignup() {
  const [isLogin, setIsLogin] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">

        <h1>{isLogin ? 'Login' : 'Create Account'}</h1>
        <p className="loginsignup-subtext">
          {isLogin
            ? 'Welcome back to BuyKart'
            : 'Sign up to get started with BuyKart'}
        </p>

        <div className="loginsignup-fields">
          {!isLogin && (
            <input type="text" placeholder='Full Name' />
          )}

          <input type="email" placeholder='Email Address' />

          {/* password field */}
          <div className="password-box">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? '🙈' : '👁'}
            </span>
          </div>
        </div>

        <button className="signup-btn">
          {isLogin ? 'Login' : 'Create Account'}
        </button>

        <p className="loginsignup-login">
          {isLogin ? 'New to BuyKart?' : 'Already have an account?'}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? ' Create Account' : ' Login here'}
          </span>
        </p>

        {!isLogin && (
          <div className="loginsignup-agree">
            <input type="checkbox" />
            <p>I agree to the Terms & Privacy Policy</p>
          </div>
        )}

      </div>
    </div>
  )
}

export default Loginsignup
