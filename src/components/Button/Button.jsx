import React from 'react'
import './Button.css'

const Button = (props) => {
 const {titleBtn} = props
 return (
  <button className='full-rounded'>
   <span>{titleBtn}</span>
   <div class='border full-rounded'></div>
  </button>
 )
}

export default Button
