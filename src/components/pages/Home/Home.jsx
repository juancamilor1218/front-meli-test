import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useFetchItems } from '../../../core/hooks/useFetchItems'
import { CardProduct } from '../../templates/CardProduct/CardProduct'
import { Breadcrumbs } from '../../UI/molecules/Breadcrumbs/Breadcrumbs'
import ClipLoader from "react-spinners/ClipLoader";
import './style.scss'
import { config } from '../../../config'
import { Error } from '../../templates/Error/Error'

const override = {
  display: "block",
  margin: "2rem auto",
};

export function Home() {

  const [searchParams, setSearchParams] = useSearchParams("");
  
  const { items , isFetching, error } = useFetchItems(searchParams.get("search") || config.DEFAULT_INITIAL_SEARCH);

  if(isFetching){
    return  <ClipLoader color={'#FFE600'} loading={isFetching} cssOverride={override}  size={100} />  //TODO: Hacer un componente aparte para el loading puede ser una molecula
  }

  if(error.error){
    return <Error description={error.data} ></Error>
  }
   

  return (
    <section className='wrapper'>
       
        <Breadcrumbs categories={items.categories}></Breadcrumbs>
        <div className='product-list' role={'list'}>
          {
            items.items.map((item)=>{
              return <CardProduct data-testid="product" item={item}></CardProduct>  
            })
          }
                      
        </div>       
    </section>
  )
}
