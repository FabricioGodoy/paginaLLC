import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { ProductDetailMap } from "./productDetailMap";
import { RequestProducts } from "../../helpers/requestDataPCOffice";

export function DetailProduct() {
    const [loading, setLoading] = useState(false)
    const [product, setProducto] = useState([])
    const { catId } = useParams()

    useEffect(() => {
        setLoading(true)
        RequestProducts()
            .then((resp) => {
                if (!catId) {
                    setProducto(resp)
                } else {
                    // eslint-disable-next-line eqeqeq
                    setProducto(resp.filter(articulo => articulo.id == catId))
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [catId])
    return (
        <>
            {loading
                ? <p>Cargando...</p>
                : <ProductDetailMap product={product} />}
        </>
    )
}