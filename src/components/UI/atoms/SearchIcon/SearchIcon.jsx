import React from 'react'
import image from './../../../../assets/ic_Search@2x.png.png'
import './style.scss'
export  function SearchIcon() {
  return (
    <div className='search-icon'>
        <img className='search-icon__image' src={image} alt="search"/>
    </div>
  )
}
