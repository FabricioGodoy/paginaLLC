import { pcGamingJSON } from "../productos/pcGamingJSON";

export function RequestProductsGaming (){
    return new Promise ( (res, reject) => {
        setTimeout( () =>{
            res(pcGamingJSON)
        }, 0)
    })
}