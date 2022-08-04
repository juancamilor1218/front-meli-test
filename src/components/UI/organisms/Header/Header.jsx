import React, { useState } from 'react'
import { Logo } from '../../atoms/Logo/Logo'
import {useNavigate} from 'react-router-dom'
import { SearchField } from '../../molecules/SearchField/SearchField'
import './style.scss'
export function Header() {

  const navigate = useNavigate();
  const[search,setSearch] = useState("");

  const handleSubmit = (e)=>{    
    navigate('/?search='+search)
  }

  return (
    <header className='header'>
      <div className='wrapper'>
        <div className='nav-item'>
          <div className='nav-item__logo'>            
            <Logo></Logo>
          </div>
          <form className='nav-item__search' onSubmit={(e)=>handleSubmit(e)} role="form">
            <SearchField placeholder={'Nunca pares de buscar'} handlerChange={(e)=>setSearch(e)} ></SearchField>
          </form>
        </div>       
      </div>
        
    </header>
  )
}
