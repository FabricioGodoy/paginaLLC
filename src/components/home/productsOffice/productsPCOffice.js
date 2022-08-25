import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { ProductMap } from "./productPCOfficeMap";
import { RequestProducts } from "../../helpers/requestDataPCOffice";

export function ProductsOfficeView(){
    const [loading, setLoading] = useState(false)
    const [stock, setStock] = useState([])
    const { catId } = useParams()


    /* Funcion para validar el stock, coincidiendo la propiedad category con la url  */
    useEffect(() => {
        setLoading(true)
        RequestProducts()
            .then((resp) => {
                if (!catId) {
                    setStock(resp)
                } else {
                   
                    // eslint-disable-next-line eqeqeq
                    setStock(resp.filter(producto => producto.id == catId))
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [catId])

    /* Termina funcion que valida stock */
    /* retorna un ternario, en caso de que no este el mapeo muestra cargando */
    return (
        <>
            {loading
                ? <p>Loading...</p>
                : <ProductMap stock={stock} />}
        </>
    )

}