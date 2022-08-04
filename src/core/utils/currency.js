import { CURRENCY_HASH } from "../constants/currencyHash"


export const currency = (currency , concatDecimals = true) =>{
    let decimalString = '';
    if(concatDecimals && currency.decimals !=='00'){
        decimalString = '.' + currency.decimals;
    }
   
    return CURRENCY_HASH[currency.currency] + currency.amount + decimalString;
}