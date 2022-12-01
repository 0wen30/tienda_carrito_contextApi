import types from "./Types";

const ProductReducer = (state,action) => {
    switch (action.type) {
        case types.ADD_PRODUCT_TO_CART:
            return state
        case types.REMOVE_PRODUCT_TO_CART:
            return state
        case types.SHOW_PRODUCT:
            return state
        default:
            return state
    }
}

export default ProductReducer