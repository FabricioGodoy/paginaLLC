import { GamingFeature } from "../productos/gamingFeature"


export function RequestFeatureGaming (){
    return new Promise ( (res, reject) => {
        setTimeout( () =>{
            res(GamingFeature)
        }, 0)
    })
}