import React, { useReducer } from 'react'
import InitialProductState from './InitialProductState'
import ProductContext from './ProductContext'
import ProductReducer from './ProductReducer'

const ProductState = ({children}) => {

    const [state, dispatch] = useReducer(ProductReducer, InitialProductState)

    const {product,cart,preview} = state;

    return (
        <ProductContext.Provider value={{product,cart,preview,dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductState