import React,{ useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { FeatureOfficeMobile } from "./featureOfficeMobileMap";
import { RequestFeatureOffice } from "../../../../helpers/requestDataFeatureOffice";


export function ProductsDestacadosOfficeMobile (){
    const [ loading, setLoading ] = useState(false)
    const [ product, setProduct ] = useState([])
    const { param } = useParams()

/* Function to validate the product, matching the category property with the url  */
        useEffect( ()=>{
            setLoading(true)
            RequestFeatureOffice()
                .then( (res) =>{
                    if (!param) {
                        setProduct(res)
                    } else {
                        // eslint-disable-next-line eqeqeq
                        setProduct( res.filter( article => article.id == param))
                    }
        }) 
        .catch ( (e) =>{
            console.log(e)
        }) 
        .finally(()=>{
            setLoading(false)
        })
}, [param])
    return(
        <>
            {loading ? <p>Loading...</p> : <FeatureOfficeMobile officeMobile={product}/>}
        </>
    )
}