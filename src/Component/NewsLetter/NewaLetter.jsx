import React from 'react'
import './NewsLetter.css'

const NewaLetter = () => {
  return (
    <div className='newsletter'>
         <h1>Get Exclusive Offer On Your Email</h1>
         <br />
         <p>Suscribe to our newsletter and stay updated  </p>
         <br /><br />
         <div>
            <input type="email" placeholder='Your Email id ' />
            <button>Suscribe</button>
            
         </div>
    </div>
  )
}

export default NewaLetter