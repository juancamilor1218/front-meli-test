import axios from "axios"
import { config } from "../../config"


export const getAllItem = (search) =>{
   return  axios.get(`${config.URL_API}items?q=:${search}`);   
}

export const getItemByID = (id) =>{
   return  axios.get(`${config.URL_API}items/${id}`);
}
