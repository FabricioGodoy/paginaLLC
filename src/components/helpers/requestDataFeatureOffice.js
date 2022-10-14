import { OfficeFeature } from "../productos/officeFeature";


export function RequestFeatureOffice (){
    return new Promise ( (res, reject) => {
        setTimeout( () =>{
            res(OfficeFeature)
        }, 0)
    })
}