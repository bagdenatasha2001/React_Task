import {ADD_TO_CART} from '../Constants'

 export const AddToCard = (data) => {

    return{
        type:'ADD_TO_CART',
        data:data
 }
}


export const removeToCard = (data) => {

    return{
        type:'Remove_TO_CART',
        data:data
 }
}