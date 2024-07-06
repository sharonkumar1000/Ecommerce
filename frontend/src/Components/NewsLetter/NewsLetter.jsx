import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>GET EXCLUSIVE OFFERS On your Email</h1>
      <p>Subscribe to News Letter and stay Updated</p>
      <div>
        <input type="email" placeholder='your email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
