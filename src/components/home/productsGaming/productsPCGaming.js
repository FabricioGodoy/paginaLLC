import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { RequestProductsGaming } from "../../helpers/requestDataPCGaming";
import { ProductsPCGamingMap } from "./productsPCGamingMap";

export function ProductsGamingView(){
    const [loading, setLoading] = useState(false)
    const [stockGaming, setStockGaming] = useState([])
    const { catId } = useParams()
   
    useEffect ( () =>{
        setLoading(true)
        RequestProductsGaming()
            .then( (resp) =>{
                if (!catId) {
                    setStockGaming(resp)
                } else {
                    setStockGaming(resp.filter(product => product.id == catId))
                }
            })
            .catch( (error) =>{
                console.log(error)
            })
            .finally( ()=>{
                setLoading(false)
            })
    }, [catId])


    return (
        <>
            {loading? <p> Loading...</p>:<ProductsPCGamingMap stockGaming={stockGaming}/>}
        </>

    )

}