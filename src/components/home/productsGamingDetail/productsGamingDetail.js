import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { ProductsGamingDetailMap } from './productsGamingDetailMap';
import { RequestProductsGaming } from '../../helpers/requestDataPCGaming';

export const ProductsGamingDetail = () => {
    const [loading, setLoading] = useState(false)
    const [producto, setProducto] = useState([])
    const { catId } = useParams()

    useEffect(() => {
      setLoading(true)
      RequestProductsGaming()
        .then( (resp) =>{
            if (!catId) {
                setProducto(resp)
            } else {
                setProducto( resp.filter(articulo => articulo.id == catId))
            }
        })
        .catch((error) =>{
            console.log(error)
        })
        .finally( ()=>{
            setLoading(false)
        })
    },[catId])
      return (
        <>
            {loading?<p>Loading..</p>: <ProductsGamingDetailMap producto={producto} />}
        </>
      ) 
}
