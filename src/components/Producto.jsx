import React, { useContext } from 'react'
import ProductContext from '../reducer/ProductContext'

const Producto = () => {

    const {product,cart,preview,dispatch} = useContext(ProductContext)

    return (
        <div>
            <h3>Producto Seleccionado</h3>
            <p>{product.find(el=>el.id===preview.id).name} | <button>🛒</button></p>
        </div>
    )
}

export default Producto