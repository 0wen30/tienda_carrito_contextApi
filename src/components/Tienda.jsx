import React, { useContext } from 'react'
import ProductContext from '../reducer/ProductContext'
import types from '../reducer/Types'
import Carrito from './Carrito'
import Producto from './Producto'

const Tienda = () => {

    const {product,cart,preview,dispatch} = useContext(ProductContext)

    const mostrar = (e) => {
        const key = e.target.value
        dispatch({});// <------------------------
    }

    return (
        <>
            <h3>Tienda</h3>
            {product.map(p=>(
                <div key={p.id}>
                    <p>{p.name} | <span>{p.quantity}</span> | <button value={p.id} onClick={mostrar}>➕</button></p>
                </div>
            ))}
            <hr />
            <Producto></Producto>
            <hr />
            <Carrito></Carrito>
        </>
    )
}

export default Tienda