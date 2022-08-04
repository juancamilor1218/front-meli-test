import { useEffect, useState } from "react"

import { getAllItem } from "../services/items.sevice";

export const useFetchItems = (search) =>{
    const[items,setItems] = useState({items:[] , categories :[]});
    const[isFetching,setIsFetching] = useState(true);
    const[error,setError] = useState({error:false, data:{}});

    useEffect(()=>{
        getAllItem(search)
        .then((res)=>{
            setItems(res.data);
        })
        .catch((err)=>{
            setError({error:true, data:err.response.data.data});
        })
        .finally(()=>{
            setIsFetching(false);
        })
    },[])

    return {items,isFetching ,error}
}