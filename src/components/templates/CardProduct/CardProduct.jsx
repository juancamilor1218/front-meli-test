import React from 'react'
import './style.scss'
import {Link} from 'react-router-dom'
import icon_shipping from  './../../../assets/ic_shipping@2x.png.png'
import { currency } from '../../../core/utils/currency'

export  function CardProduct({item}) {
  return (
    <div className='content-card'>
      <a className='card-item' href={'/items/'+item.id}>
          <img className='card-item__image' src={item.picture}/>
          <div className="card-item__content">
            <div className='card-item__title'>
                <h2>{currency(item.price)}</h2>             
                {
                  item.free_shipping ? <img src={icon_shipping} className="card-item__icon" /> :''
                }                   
            </div>
            <h3>{item.title}</h3>  
          </div>                   
          <span className='card_item__text'>{item.city}</span>
      </a>
      <hr></hr>
    </div>

  )
}
