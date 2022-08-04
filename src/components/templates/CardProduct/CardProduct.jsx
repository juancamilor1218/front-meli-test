import React from 'react'
import './style.scss'
import {Link} from 'react-router-dom'
import icon_shipping from  './../../../assets/ic_shipping@2x.png.png'
import { currency } from '../../../core/utils/currency'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export  function CardProduct({item}) {
  return (
    <div className='content-card'>
      <a className='card-item' href={'/items/'+item.id}>
          <LazyLoadImage width={180} height={180}   src={item.picture}></LazyLoadImage>          
          <div className="card-item__content">
            <div className='card-item__title'>
                <h2>{currency(item.price)}</h2>             
                {
                  item.free_shipping ? <img src={icon_shipping} className="card-item__icon" alt='icon_shipping' /> :''
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
