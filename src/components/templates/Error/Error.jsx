import React from 'react'
import { Button } from '../../UI/atoms/Button/Button'
import './style.scss'
export  function Error({description, reload}) {    
  return (
    <div className='error'>
        <img className='error__image' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/OOjs_UI_icon_alert-yellow.svg/1200px-OOjs_UI_icon_alert-yellow.svg.png'}/>
        <span className='error__description'>{description.message}</span>
        <h1>¡Ups! Algo salió mal</h1>
        <div className='error__action'>
            <Button text={'Intentar nuevamente'}></Button>
        </div>        
    </div>
  )
}
