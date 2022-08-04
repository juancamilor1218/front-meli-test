import React from 'react'
import { Button } from '../../UI/atoms/Button/Button'
import {useParams} from 'react-router-dom'
import './style.scss'
import { useFetchDetail } from '../../../core/hooks/useFetchDetail';
import { currency } from '../../../core/utils/currency';
import { ClipLoader } from 'react-spinners';
import { Error } from '../../templates/Error/Error';
import normalize from '../../../core/utils/normalize';

const override = {
    display: "block",
    margin: "2rem auto",
  };

export  function Detail() { 
  let { id } = useParams();
  const {item,isFetching, error } = useFetchDetail(id);

  const createMarkup = (text) => {
    return {__html: text};
  }

  if(isFetching){
    return <ClipLoader color={'#FFE600'} loading={isFetching} cssOverride={override}  size={100} /> 
  }

  if(error.error){
    return <Error description={error.data} ></Error>
  }
   
  return (
    <div className='wrapper'>
       
        <section className='detail'>

            <img className='detail__main-image' src={item.picture} alt="producto foto principal"/>
        
            <div className="card-reduced">
                <small className='card-reduced__description'>{item.condition === 'new' ? 'Nuevo - ' : ''}  {item.sold_quantity} vendidos</small>
                <h2>{item.title}</h2>
                <div className='price'>
                    <span className='price__main'>{currency(item.price,false)}</span>
                    <span>{item.price.decimals}</span>
                </div>
                <Button text={'Comprar'}></Button>
            </div>
            <div className='detail__description'>
                <h1>Description del producto</h1>
                <p dangerouslySetInnerHTML={createMarkup(normalize(item.description))}>
                    
                </p>
            </div>
        </section>
    </div>

  )
}
