import { Products } from "../productos/productsJSON";

export function RequestProducts (){
    return new Promise ( (res, reject) => {
        setTimeout( () =>{
            res(Products)
        }, 0)
    })
}