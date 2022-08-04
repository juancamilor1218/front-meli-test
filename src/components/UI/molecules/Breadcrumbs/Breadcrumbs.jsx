import React from 'react'
import './style.scss'
import { Link } from "react-router-dom";
export function Breadcrumbs({categories}) {
  return (
    
        <ul className='breadcrumb'>
        {
           categories.map((item,index)=>(            
                <li key={index}><Link  to={`?search=${item}` }  >{item}</Link> </li>             
            ))
        }
       </ul>

  )
}
