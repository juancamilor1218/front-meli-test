import React from 'react'
import {SearchIcon} from './../../atoms/SearchIcon/SearchIcon'
import './style.scss';
export function SearchField({placeholder,handlerChange}) {
  return (
    <div className='search-group'>
        <input className='search-group__field' name='search' type={'text'} placeholder={placeholder} onChange={(e)=>{handlerChange(e)}} />
        <button className='search-group__button' type='submit' >
            <SearchIcon></SearchIcon>
        </button>
      
    </div>
  )
}
