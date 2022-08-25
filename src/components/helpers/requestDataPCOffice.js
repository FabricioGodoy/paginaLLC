import { pcOfficeJSON } from "../productos/pcOfficeJSON";

export function RequestProducts (){
    return new Promise ( (res, reject) => {
        setTimeout( () =>{
            res(pcOfficeJSON)
        }, 0)
    })
}