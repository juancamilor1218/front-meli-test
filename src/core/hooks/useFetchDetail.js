import { useEffect, useState } from "react"

import {  getItemByID } from "../services/items.sevice";

export const useFetchDetail = (id) =>{
    const[item,setItem] = useState({});
    const[isFetching,setIsFetching] = useState(true);
    const[error,setError] = useState({error:false, data:{}});

    useEffect(()=>{
        getItemByID(id)
        .then((res)=>{
            setItem(res.data.item);
        })
        .catch((err)=>{  
            debugger;          
            setError({error:true, data:err.response.data.data});
        })
        .finally(()=>{
            setIsFetching(false);
        })
    },[])

    return {item,isFetching , error}
}