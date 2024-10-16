import React from 'react'
import button from './Button.module.css'

const Button = ({BtnText, className, style}) => {
  return (
    <button className={`${button.btn} ${className}`} style={style}>{BtnText}</button>
  )
}

export default Button