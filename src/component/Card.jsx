import React from 'react'
import { useState } from 'react'
import './card.scss'

const Card = () => {
  const[email,setEmail]=useState("")
  const[error,setError]=useState('')
  
  
  const submitHandle= (e)=>{
    e.preventDefault()
    if (validateEmail(email)){
      setError('')
      return;
    }
    setError('Email is not valid' )
    return false;
    
  }



    return (
    <div className="card">
        <div className="left">
            <div className="logo">
                <img src={require('./logo.svg').default} alt="" />
            </div>
            <div className="title">
                <h1><span>We're <br /> </span> coming <br /> soon</h1>
                <p>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
            </div>
            <div className="inp">
                <form onSubmit={submitHandle}>
                <input type="email" placeholder='Email Address'   value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <button><img src={require('./icon-arrow.svg').default} alt="" /></button>
                {error && (<span>{error} <div className='errorIcon'><img src={require('./icon-error.svg').default} alt="" /></div></span>)}
                </form>
                
            </div>
        </div>
        <div className="right">
             
        </div>

    </div>
  )
}
export const validateEmail=(email)=>{
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (regex.test(email)){
    return true;
  }
  return false;
};

export default Card