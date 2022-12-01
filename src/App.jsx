import Tienda from "./components/Tienda"
import ProductState from "./reducer/ProductState"

const App = () => {
    return (
        <ProductState>
            <Tienda></Tienda>
        </ProductState>
    )
}

export default App