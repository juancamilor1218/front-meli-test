import React from 'react'
import './style.scss'
import image from './../../../../assets/Logo_ML@2x.png.png'
export function Logo() {
  return (
    <a href={'/'} className='logo'>
        <img src={image} alt="logo" className='logo__image'/>
    </a>   
  )
}
