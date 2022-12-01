import React, { useContext } from 'react'
import ProductContext from '../reducer/ProductContext'

const Carrito = () => {

    const {product,cart,dispatch} = useContext(ProductContext)

    return (
        <div>
            <h3>Carrito</h3>
            <div>
                {cart.map(({id,quantity})=>(
                    <div key={id}>
                    <p>{product.find(pr=>pr.id===id).name} | {quantity} | <button>❌</button> </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Carrito